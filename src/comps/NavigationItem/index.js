import LinkComp from "../LinkComp";
import Dropdown from "../Dropdown";
import { useDropdownState } from "@/hooks/useDropdownState";

import cn from "clsx";
import st from "./index.module.css";

export default function NavigationItem({
  href,
  title,
  childItems,
  isActive,
  id = "",
  isCta,
  isSocials,
  sparkInfo,
  isDropdownVisible,
}) {
  const { isOpen } = useDropdownState(id) || {};

  if (childItems?.length) {
    return (
      <Dropdown id={id} closeOnOutsideClick>
        <div className={st.dropdownContainer}>
          <Dropdown.Button className={cn(st.root, isActive && st.root_active)}>
            {title}
          </Dropdown.Button>
          <Dropdown.Collapse
            className={cn(
              st.dropdownCollapse,
              isCta && st.dropdownCollapse_cta,
              isSocials && st.dropdownCollapse_socials,
              isOpen && st.dropdownCollapse_open,
              isDropdownVisible && st.dropdownCollapse_visible,
            )}
            animation={{
              openDuration: 0.3,
              closeDuration: 0.25,
              openEaseCSS: "easeInOutExpo",
              closeEaseCSS: "easeInOutExpo",
            }}
          >
            <ul className={st.dropdownLinks}>
              {childItems.map((e, t) => {
                if (!e.href || !e.title) return null;

                const { href, title, sparkInfoId, hasIcon } = e;

                return (
                  <li key={t}>
                    <LinkComp href={href} size="submenu" hasIcon={hasIcon}>
                      {sparkInfoId
                        ? title.replace(
                            "${value}",
                            sparkInfo?.[sparkInfoId] || "",
                          )
                        : title}
                    </LinkComp>
                  </li>
                );
              })}
            </ul>
          </Dropdown.Collapse>
        </div>
      </Dropdown>
    );
  }

  return href ? (
    <LinkComp
      className={cn(
        st.root,
        st.root_link,
        isActive && st.root_active,
        href.startsWith("/spk") && st.root_linkSpk,
      )}
      href={href}
      aria-current={isActive ? "page" : undefined}
      size="medium"
      theme="transparent"
    >
      {title}
    </LinkComp>
  ) : null;
}
