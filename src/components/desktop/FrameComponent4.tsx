import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='footerBorderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.meetTheHappyCoupleWrapper}>
            <h2 className={styles.meetTheHappy}>Kelin va kuyov</h2>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/desktop/kuyov.jpeg"
            />
            <div className={styles.frameWrapper1}>
              <div className={styles.asepIrawanLotusParent}>
                <div className={styles.asepIrawanLotus}>
                  <h1 className={styles.asepIrawan}>Orifjon Oybekov</h1>
                </div>
                <div className={styles.mrIlhamMrsFatimaWrapper}>
                  <div
                    className={styles.mrIlham}
                  >{`Oybek va Zumrad o'g'li`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper3}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/desktop/kelin.jpeg"
            />
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.asepIrawanLotusWrapper}>
              <div className={styles.asepIrawanLotus1}>
                <h1 className={styles.asepIrawan1}>Mirzamaxmudova <br /> Maftuna </h1>
              </div>
            </div>
            <div
              className={styles.mrIbrahim}
            >{`Erkin va Saida qizi`}</div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
