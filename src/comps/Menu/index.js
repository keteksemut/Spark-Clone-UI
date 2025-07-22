import { useRef, useEffect } from "react";
import { Modal, modalManager, useModalState } from "@/hooks/useModalState";
import { Breakpoints, useResponsive } from "@/hooks/useResponsive";
import { NavigationTypes } from "@/libs/navEnums";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import Container from "../Container";
import NavigationNested from "../NavigationNested";
import st from "./index.module.css";

export default function Menu ({
    id,
    navigation,
    socials,
    banner,
    buttons,
    mainLinks,
    learn,
    sparkInfo,
  }) {
  const { width } = useResponsive();
  const _ = width >= Breakpoints.LAPTOP;
  const mRef = useRef(null);
  const v = useModalState(id)?.isOpen;
  const b = useScrollLock();
  const y = useFocusTrap({ ref: mRef });

  useEffect(() => {
    if (v) {
      modalManager.closeAllExcept(id), b.lockScroll(id), y.lock();
    } else {
      b.unlockScroll(id), y.unlock();
    }
  });

  useEffect(() => {
    if (_ && v) {
      modalManager.close(id);
    }
  });

  return (
    <Modal id={id} className={st.menu} classNameActive={st.menu_active}>
      {
        <div ref={mRef} className={st.overflow}>
          {
            <Container className={st.container} style={{ paddingRight: b.offset }}>
              {
                <NavigationNested
                  navigation={navigation}
                  learn={learn}
                  socials={socials}
                  mainLinks={mainLinks}
                  banner={undefined}
                  buttons={null}
                  sparkInfo={sparkInfo}
                  onClick={modalManager.closeAll}
                />
              }
            </Container>
          }
        </div>
      }
    </Modal>
  );
};
