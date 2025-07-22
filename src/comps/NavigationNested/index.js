import LinkComp from "../LinkComp";
import Link from "next/link";

import cn from "clsx";
import st from "./index.module.css";

export default function NavigationNested({ navigation, socials, mainLinks, learn, sparkInfo, onClick }) {
  return (
    <nav className={st.nav} aria-label="primary">
      <div>
        {/* Spark Section */}
        <ul className={st.list}>
          <p>Spark</p>
          {navigation &&
            navigation.map(({ id, title, href }) => {
              if (!href) return null;
              return (
                <li key={title} className={st.listItem}>
                  <Link
                    className={cn(st.link, href.startsWith("/spk") && st.link_spk)}
                    href={href}
                    onClick={onClick}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
        </ul>

        {/* Learn Section */}
        <ul className={st.list}>
          <p>Learn</p>
          {learn &&
            learn.map(({ childItems }) =>
              childItems &&
              childItems.map(({ href, title }) => (
                <li key={title}>
                  <LinkComp href={href} onClick={onClick}>
                    {title}
                  </LinkComp>
                </li>
              ))
            )}
        </ul>

        {/* Socials Section */}
        <ul className={st.list}>
          <p>Socials</p>
          {socials &&
            socials.map(({ title, href }) => {
              if (!href) return null;
              return (
                <li key={title} className={st.listItem}>
                  <LinkComp href={href} onClick={onClick}>
                    {title}
                  </LinkComp>
                </li>
              );
            })}
        </ul>
      </div>

      {/* Main Links */}
      <ul className={st.mainLinks}>
        {mainLinks &&
          mainLinks.map(({ childItems }) =>
            childItems &&
            childItems.map(({ href, title, sparkInfoId }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  target={href?.includes("http") ? "_blank" : "_self"}
                  onClick={onClick}
                >
                  {sparkInfoId
                    ? title.replace(
                        "${value}",
                        sparkInfo?.[sparkInfoId] || ""
                      )
                    : title}
                </Link>
              </li>
            ))
          )}
      </ul>
    </nav>
  );
}

