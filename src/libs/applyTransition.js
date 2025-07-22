const isFloat32Supported = typeof Float32Array === "function";

function cubicBezierAt(t, p1, p2) {
  return (((1 - 3 * p2 + 3 * p1) * t + (3 * p2 - 6 * p1)) * t + 3 * p1) * t;
}

function cubicBezierDerivative(t, p1, p2) {
  return 3 * (1 - 3 * p2 + 3 * p1) * t * t + 2 * (3 * p2 - 6 * p1) * t + 3 * p1;
}

function createBezier(x1, y1, x2, y2) {
  if (!(x1 >= 0 && x1 <= 1 && x2 >= 0 && x2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }

  const sampleValues = isFloat32Supported ? new Float32Array(11) : new Array(11);
  if (x1 !== x2 || y1 !== y2) {
    for (let i = 0; i < 11; ++i) {
      sampleValues[i] = cubicBezierAt(0.1 * i, x1, x2);
    }
  }

  function getTForX(x) {
    let intervalStart = 0;
    let currentSample = 1;

    while (currentSample < 11 && sampleValues[currentSample] <= x) {
      ++currentSample;
      intervalStart += 0.1;
    }

    --currentSample;

    const dist = (x - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * 0.1;

    const initialSlope = cubicBezierDerivative(guessForT, x1, x2);
    if (initialSlope >= 0.001) {
      let t = guessForT;
      for (let i = 0; i < 4; ++i) {
        const slope = cubicBezierDerivative(t, x1, x2);
        if (slope === 0) break;
        const xEstimate = cubicBezierAt(t, x1, x2) - x;
        t -= xEstimate / slope;
      }
      return t;
    }

    if (initialSlope === 0) return guessForT;

    // binary subdivision fallback
    let a = intervalStart;
    let b = intervalStart + 0.1;
    let t, guess;
    let i = 0;
    do {
      t = a + (b - a) / 2;
      guess = cubicBezierAt(t, x1, x2) - x;
      if (guess > 0) {
        b = t;
      } else {
        a = t;
      }
    } while (Math.abs(guess) > 1e-7 && ++i < 10);

    return t;
  }

  return function (x) {
    if (x1 === x2 && y1 === y2) return x;
    if (x === 0) return 0;
    if (x === 1) return 1;

    const t = getTForX(x);
    return cubicBezierAt(t, y1, y2);
  };
}

const easingKeys = {
  default: "default",
  ease: "ease",
  easeIn: "easeIn",
  easeInOut: "easeInOut",
  easeInOutExpo: "easeInOutExpo",
  easeInPower2: "easeInPower2",
  easeInPower3: "easeInPower3",
  easeOut: "easeOut",
  easeOutPower2: "easeOutPower2",
  easeOutPower3: "easeOutPower3",
  easePower2: "easePower2",
  easePower3: "easePower3",
  easePower4: "easePower4",
  easeService: "easeService",
  easeSine: "easeSine",
  linear: "linear",
};

export const isEasingKeyValid = (e) => Object.values(easingKeys).includes(e);

// pre-compile (can optionally be memoized for performance)
createBezier(0.25, 0.1, 0.25, 1);
createBezier(1, 0, 0, 1);
createBezier(0.95, 0.05, 0.795, 0.035);
createBezier(0.42, 0, 0.58, 1);
createBezier(0.16, 1, 0.3, 1);
createBezier(0.55, 0.055, 0.675, 0.19);
createBezier(0.55, 0.085, 0.68, 0.53);
createBezier(0.16, 1, 0.3, 1);
createBezier(0.25, 0.46, 0.45, 0.94);
createBezier(0.215, 0.61, 0.355, 1);
createBezier(0.77, 0, 0.175, 1);
createBezier(0.645, 0.045, 0.355, 1);
createBezier(0.86, 0, 0.07, 1);
createBezier(0.14, 0, 0.15, 0.89);
createBezier(0.445, 0.05, 0.55, 0.95);
createBezier(0, 0, 1, 1);

export const easingValues = {
  default: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  ease: "cubic-bezier(1, 0, 0, 1)",
  easeIn: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
  easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)",
  easeInOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInPower2: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  easeInPower3: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  easeOut: "cubic-bezier(0.19, 1, 0.22, 1)",
  easeOutPower2: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  easeOutPower3: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  easePower2: "cubic-bezier(0.77, 0, 0.175, 1)",
  easePower3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  easePower4: "cubic-bezier(0.86, 0, 0.07, 1)",
  easeService: "cubic-bezier(0.14, 0, 0.15, 0.89)",
  easeSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
  linear: "linear",
};

// export (match original module's named exports)
