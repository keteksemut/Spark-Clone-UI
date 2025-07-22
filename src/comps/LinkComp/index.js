import Link from "next/link";
import cn from "clsx";
import st from "./index.module.css";
import dynamic from "next/dynamic";

const NorthWest = dynamic(() => import('@/assets/icons/NorthWest.svg'), { ssr: false });

export default function LinkComp ({
    children,
    href,
    className,
    theme,
    size,
    hasIcon,
    onClick,
    style,
    forwardedRef,
    ..._
}){
    const textStyles = () => {
        const e = {
            small: st.Link__text_small,
            medium: {
                black: st.Link__text_mediumBlack,
                white: st.Link__text_mediumWhite,
                "white-med": st.Link__text_mediumWhiteMed,
                transparent: st.Link__text_mediumTransparent
            },
            large: st.Link__text_large,
            submenu: st.Link__text_submenu
        };
        return "medium" === size ? e.medium[theme] || "" : e[size]
    }
    const linkStyles = {
        className: (() => {
            const e = st.Link
            const t = {
                small: st.Link__small,
                medium: {
                    black: st.Link__mediumBlack,
                    white: st.Link__mediumWhite,
                    "white-med": st.Link__mediumWhiteMed,
                    transparent: st.Link__mediumTransparent
                },
                large: st.Link__large,
                submenu: st.Link__submenu
            }
            const n = "medium" === size ? t.medium[theme] : "";
            return cn(e, t[size], n, className)
        })(),
        onClick: onClick,
        style: style,
        ref: forwardedRef,
        ..._
    };

    return href ? (
        <Link
            href={href || ""}
            {...linkStyles}
            target={href.includes("http") ? "_blank" : "_self"}
        >
            <span className={st.Link__container}>
                {("black" === theme || "white-med" === theme) && "medium" === size ? (
                    <span className={st.textContainer}>
                        <span className={cn(textStyles(), st.text1)}>{children}</span>
                        <span className={cn(textStyles(), st.text2)}>{children}</span>
                    </span>
                ) : (
                    <span className={textStyles()}>{children}</span>
                )}
                {hasIcon && (
                    <span className={st.Link__iconContainer}>
                        <NorthWest className={cn(st.Link__icon, st.Link__icon1)} />
                        <NorthWest className={cn(st.Link__icon, st.Link__icon2)} />
                    </span>
                )}
            </span>
        </Link>
    ) : (
        <button type="button" className={st.Button} style={style}>
            {children}
        </button>
    );
}
