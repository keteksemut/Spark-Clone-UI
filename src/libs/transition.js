import { isEasingKeyValid, easingValues } from "./applyTransition";

// === Frame Rate Measurement ===
let r = 60; // target FPS
let i = 0;
const s = [60, 120, 144, 160]; // allowed frame rates
const o = [];

if (typeof window !== "undefined") {
    const a = function () {
        const now = window.performance.now();

        if (i) {
            const delta = now - i;
            o.push(1000 / delta); // push current FPS
        }

        if (o.length > 0) {
            let avg = o.reduce((acc, fps) => acc + fps / o.length, 0);
            r = s.reduce((closest, val) =>
                Math.abs(val - avg) < Math.abs(closest - avg) ? val : closest
            );
        }

        if (o.length > 300) o.shift();
        i = now;
        requestAnimationFrame(a);
    };

    a(); // start measuring FPS
}

// === Main Transition Function ===
export const transition = (el, duration, styles, options = {}) => {
    // Extract all style property keys
    const getProperties = (obj) => Object.keys(obj).join(", ");

    // Format duration/delay/easing arrays into strings
    const expandStyleValues = (values, unit = "", count) => {
        if (!Array.isArray(values)) values = [values];
        for (let i = values.length; i < count; i++) {
            values[i] = values[values.length - 1]; // repeat last value
        }
        return values.map((v, i) => (i > 0 ? ", " : "") + v + unit).join("");
    };

    // Get easing string from name or passthrough
    const getEasingValue = (value) => {
        if (isEasingKeyValid(value)) return easingValues[value];
        if (!value.startsWith("cubic-bezier"))
            throw new Error("Invalid easing value");
        return value;
    };

    // Normalize options
    options = {
        delay: 0,
        ease: "ease",
        ...options,
    };

    const easings = Array.isArray(options.ease)
        ? options.ease.map(getEasingValue)
        : [getEasingValue(options.ease || "default")];

    const delays = Array.isArray(options.delay)
        ? options.delay
        : [options.delay || 0];

    const propertyCount = getProperties(styles).split(" ").length;

    const applyTransition = () => {
        if (HTMLCollection.prototype.isPrototypeOf(el)) {
            el = Array.from(el);
        } else if (!Array.isArray(el)) {
            el = [el];
        }

        el.forEach((node) => {
            node.style.transitionProperty = getProperties(styles);
            node.style.transitionDuration = expandStyleValues(duration, "s", propertyCount);
            node.style.transitionDelay = expandStyleValues(delays, "s", propertyCount);
            node.style.transitionTimingFunction = expandStyleValues(easings, "", propertyCount);

            for (let key in styles) {
                if (key in node.style) {
                    if (key === "transform") {
                        node.style.transform = `${styles.transform}`;
                    } else {
                        node.style[key] = `${styles[key]}`;
                    }
                } else {
                    throw new Error(`style "${key}" is not a valid CSS property`);
                }
            }
        });
    };

    if (options.skipFrame) {
        setTimeout(applyTransition, 1000 / 60); // defer by 1 frame
    } else {
        applyTransition();
    }
};
