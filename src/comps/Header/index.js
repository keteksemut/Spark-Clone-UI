import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import NavigationItem from "../NavigationItem";
import Container from "../Container";
import Menu from "../Menu";
import ToggleBurger from "../ToggleBurger";

import { Breakpoints, useResponsive } from "@/hooks/useResponsive";
import { useDropdownState } from "@/hooks/useDropdownState";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { useModalState } from "@/hooks/useModalState";

import { NavigationTypes } from "@/libs/navEnums";
import cn from "clsx";
import st from "./index.module.css"

const NorthWest = dynamic(() => import('@/assets/icons/NorthWest.svg'), { ssr: false });

const et = "header-dropdown";

export default function HeaderComp ({
      navigation,
      socials,
      mainLinks,
      learn,
      sparkInfo = {},
      sparkInfoId,
      banner,
    }) {
    const _ = useRef(null);
    const [v, b] = useState(false);
    const [y, w] = useState(false);
    const [k, j] = useState(true);
    const [O, C] = useState(false);
    const [E, L] = useState("transparent");
    const { width } = useResponsive();
    const I = width >= Breakpoints.TABLET;
    const { globalState } = useDropdownState() || {};

    useEffect(() => {
      L(
        (
          globalState == null
            ? undefined
            : globalState.some(
                (e) =>
                  (e == null ? undefined : e.isOpen) &&
                  (e == null ? undefined : e.id.includes(et))
              )
        )
          ? "white"
          : "transparent"
      );
    }, [globalState]);
    const q = usePathname();
    useStickyHeader(_);
    const U = usePathname();
    const z = useModalState(NavigationTypes.MENU)?.isOpen;
    const [B, H] = useState(0);
    const [K, Z] = useState(0);
    const V = () => {
      if (O) {
        const window_scrollY = window.scrollY;
        H(-Math.min(40, window_scrollY));
        Z(Math.max(0, 40 - window_scrollY));
      }
    };
  
    useEffect(() => {
      if (O) {
        window.addEventListener("scroll", V);
        V();
  
        return () => {
          window.removeEventListener("scroll", V);
        };
      }
      Z(0);
    }, [O, q]);
  
    useEffect(() => {
      if (k) {
        b(true);
      }
    }, [k]);
  
    useEffect(() => {
      setTimeout(() => {
        w(true);
      }, 1000 /* 1e3 */);
    }, []);
  
    useEffect(() => {
      const e = localStorage.getItem("bannerDismissed");
      const t = e ? JSON.parse(e) : {};
  
      if (
        (banner == null ? undefined : banner.date) &&
        (t == null ? undefined : t.date) !== banner.date
      ) {
        C(true);
      } else {
        C(!(t == null ? undefined : t.dismissed));
      }
    }, [banner]);
  
    return (
      <>
        <header ref={_} className={st.root}>
          {O && (banner == null ? undefined : banner.link) && !z && (
            <div className={st.banner}>
              {
                <Link
                  href={(banner == null ? undefined : banner.link) ?? ""}
                  target={
                    (banner == null ? undefined : banner.link.startsWith("http"))
                      ? "_blank"
                      : undefined
                  }
                  className={st.banner__link}
                >
                  {
                    <Container className={st.banner__container}>
                      {I && <div />}
                      <div className={st.banner__innerContainer}>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              (banner == null
                                ? undefined
                                : banner.linkLabel.replace(
                                    "${value}",
                                    (sparkInfo == null ? undefined : sparkInfo.ssr) || ""
                                  )) || "",
                          }}
                        />
                        <NorthWest className={st.banner__icon} />
                      </div>
                      <div className={st.banner__buttonContainer}>
                        {
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
  
                              localStorage.setItem(
                                "bannerDismissed",
                                JSON.stringify({
                                  dismissed: true,
                                  date: banner == null ? undefined : banner.date,
                                })
                              );
  
                              C(false);
                            }}
                            className={st.banner__button}
                          >
                            {
                              <svg
                                width="16"
                                height="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.996 3.441 3.46 13l-.457-.44 9.538-9.558.456.44Z"
                                  fill="#fff"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.541 13 3 3.442 3.459 3 13 12.558l-.459.442Z"
                                  fill="#fff"
                                />
                                <path
                                  clip-rule="evenodd"
                                  d="M12.996 3.441 3.46 13l-.457-.44 9.538-9.558.456.44Z"
                                  stroke="#fff"
                                />
                                <path
                                  clip-rule="evenodd"
                                  d="M12.541 13 3 3.442 3.459 3 13 12.558l-.459.442Z"
                                  stroke="#fff"
                                />
                              </svg>
                            }
                          </button>
                        }
                      </div>
                    </Container>
                  }
                </Link>
              }
            </div>
          )}
          <div
            className={cn(
              st.theme,
              st[`theme_${E}`],
              (z || E === "white") && st.theme_borderBottom
            )}
          >
            {
              <Container className={st.container}>
                {
                  <div className={st.inner}>
                    <nav aria-label="primary" className={st.nav}>
                      <div className={st.listItem}>
                        {
                          <Link
                            href="/"
                            aria-label="Home page"
                            className={cn(st.logo, v && st.logo_triggered)}
                          >
                            {
                              <Image
                                src="./logo.svg"
                                alt="logo"
                                width={105}
                                height={32}
                                onLoad={() => {
                                  j(true);
                                }}
                                priority
                              />
                            }
                          </Link>
                        }
                      </div>
                      <ul className={st.list}>
                        <div className={st.navLeft}>
                          {navigation == null
                            ? undefined
                            : navigation.map((e, t) => {
                                if (!e) {
                                  return null;
                                }
                                let { title: n, href: i, childItems: s } = e;
                                let o =
                                  U === `/${i}` ||
                                  (s == null
                                    ? undefined
                                    : s.some((e) => U === `/${e.href}`));
                                return (
                                  <li
                                    key={e.title}
                                    className={cn(
                                      st.listItem,
                                      v && st.listItem_triggered
                                    )}
                                    style={{
                                      transitionDelay: `${30 * (t + 1)}ms`,
                                    }}
                                  >
                                    {
                                      <NavigationItem
                                        href={i}
                                        isActive={o}
                                        childItems={s}
                                        title={n}
                                        id={`${et}-navigation-${t}`}
                                        sparkInfo={sparkInfo}
                                        sparkInfoId={sparkInfo}
                                      />
                                    }
                                  </li>
                                );
                              })}
                          {learn == null
                            ? undefined
                            : learn.map((e, t) => {
                                if (!e) {
                                  return null;
                                }
                                let { title: n, href: i, childItems: s } = e;
                                let o =
                                  U === `/${i}` ||
                                  (s == null
                                    ? undefined
                                    : s.some((e) => U === `/${e.href}`));
                                return (
                                  <li
                                    key={e.title}
                                    className={cn(
                                      st.listItem,
                                      v && st.listItem_triggered
                                    )}
                                    style={{
                                      transitionDelay: `${150 * (t + 1)}ms`,
                                    }}
                                  >
                                    {
                                      <NavigationItem
                                        href={i}
                                        isActive={o}
                                        childItems={s}
                                        title={n}
                                        id={`${et}-learn-${t}`}
                                        sparkInfo={sparkInfo}
                                        hasIcon
                                        isDropdownVisible={y}
                                      />
                                    }
                                  </li>
                                );
                              })}
                        </div>
                        <div className={st.navRight}>
                          {socials == null
                            ? undefined
                            : socials.map((e, t) => {
                                if (!e) {
                                  return null;
                                }
                                let { title: n, href: i, childItems: s } = e;
                                let o =
                                  U === `/${i}` ||
                                  (s == null
                                    ? undefined
                                    : s.some((e) => U === `/${e.href}`));
                                let a =
                                  s == null
                                    ? undefined
                                    : s.filter(
                                        (e) =>
                                          e.title !== "GitHub" &&
                                          e.title !== "Forum"
                                      );
                                return (
                                  <li
                                    key={e.title}
                                    className={cn(
                                      st.listItem,
                                      v && st.listItem_triggered
                                    )}
                                    style={{
                                      transitionDelay: `${30 * (t + 1)}ms`,
                                    }}
                                  >
                                    {
                                      <NavigationItem
                                        href={i}
                                        isActive={o}
                                        childItems={a}
                                        title={n}
                                        id={`${et}-socials-${t}`}
                                        sparkInfo={sparkInfo}
                                        isSocials
                                        isDropdownVisible={y}
                                      />
                                    }
                                  </li>
                                );
                              })}
                          {mainLinks == null
                            ? undefined
                            : mainLinks.map((e, t) => {
                                if (!e) {
                                  return null;
                                }
                                let { title: n, href: i, childItems: s } = e;
                                let a =
                                  U === `/${i}` ||
                                  (s == null
                                    ? undefined
                                    : s.some((e) => U === `/${e.href}`));
                                return (
                                  <li
                                    key={e.title}
                                    className={cn(
                                      st.listItem,
                                      v && st.listItem_triggered
                                    )}
                                    style={{
                                      transitionDelay: `${240 * (t + 1)}ms`,
                                    }}
                                  >
                                    {
                                      <NavigationItem
                                        href={i}
                                        isActive={a}
                                        childItems={s}
                                        title={n}
                                        id={`${et}-main-${t}`}
                                        isCta={mainLinks.length - 1 === t}
                                        sparkInfo={sparkInfo}
                                        isDropdownVisible={y}
                                      />
                                    }
                                  </li>
                                );
                              })}
                        </div>
                      </ul>
                    </nav>
                    <div className={st.logoLink_mobile}>
                      {
                        <Link
                          href="/"
                          aria-label="Home page"
                          className={cn(st.logo, v && st.logo_triggered)}
                        >
                          {
                            <Image
                              src="./logo.svg"
                              alt="logo"
                              width={105}
                              height={32}
                            />
                          }
                        </Link>
                      }
                    </div>
                    <ToggleBurger
                      className={cn(
                        st.menuToggler,
                        !z && st[`menuToggler_${E}`]
                      )}
                    />
                  </div>
                }
              </Container>
            }
          </div>
        </header>
        <Menu
          socials={socials[0].childItems}
          navigation={navigation}
          mainLinks={mainLinks}
          id="MENU"
          buttons={null}
          banner={banner}
          learn={learn}
          sparkInfo={sparkInfo}
        />
      </>
    );
  };
