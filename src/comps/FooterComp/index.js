import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import LinkComp from "../LinkComp";
import AnimatedHeading from "../AnimatedHeading";
import { Breakpoints, useResponsive } from "@/hooks/useResponsive";
import st from "./index.module.css";

export default function FooterComp ({ content }) {
  const { title, link, linkLabel, navigation, additionalLinks } = content;
  const { width } = useResponsive();
  const h = width >= Breakpoints.HD;

  return (
    <footer className={st.footer}>
      {
        <Container className={st.footer__container}>
          <Link href="/" className={st.footer__link}>
            {
              <Image
                src="./logo.svg"
                alt="logo"
                width={h ? 207 : 155}
                height={h ? 64 : 48}
                className={st.logo}
                priority
              />
            }
          </Link>
          <AnimatedHeading level="6" tagName="p" className={st.footer__title}>
            {title}
          </AnimatedHeading>
          <LinkComp href={link} size="large" hasIcon className={st.footer__appLink}>
            {linkLabel}
          </LinkComp>
          <ul className={st.footer__navigation}>
            {navigation.map((e, t) => (
              <li key={t} className={st.footer__navItem}>
                <p>{e.navTitle}</p>
                <ul>
                  {e.navItems.map((e, t) => (
                    <li key={t}>
                      {
                        <LinkComp href={e.link} size="medium">
                          {e.linkLabel}
                        </LinkComp>
                      }
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className={st.footer__bottomContainer}>
            <p>Powered by Sky</p>
            <ul>
              {additionalLinks.map((e, t) => (
                <li key={t}>
                  {
                    <Link
                      href={e.link}
                      target={e.link.startsWith("http") ? "_blank" : undefined}
                    >
                      {e.linkLabel}
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </div>
        </Container>
      }
    </footer>
  );
};
