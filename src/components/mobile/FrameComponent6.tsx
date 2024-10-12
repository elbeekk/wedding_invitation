import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourStoryContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={[styles.hpOrchidInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.meetTheHappyCoupleWrapper}>
                  <h2 className={styles.meetTheHappy}>Kelin va kuyov</h2>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    loading="lazy"
                    alt=""
                    src="/mobile/kuyov.jpeg"
                  />
                  <div className={styles.frameParent2}>
                    <div className={styles.asepIrawanWrapper}>
                      <h1 className={styles.asepIrawan}>Orifjon Oybekov</h1>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.sonOfParent}>
                        <b
                          className={styles.mrIlham}
                        >{`Oybek va Zumrad o'g'li`}</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.maskGroupGroup}>
                  <img
                    className={styles.maskGroupIcon1}
                    loading="lazy"
                    alt=""
                    src="/mobile/kelin.jpeg"
                  />
                  <div className={styles.frameParent4}>
                    <div className={styles.frameParent5}>
                      <div className={styles.putriAmandaWrapper}>
                        <h1 className={styles.putriAmanda}>Mirzamaxmudova Maftuna</h1>
                      </div>
                      <div className={styles.daughterOfParent}>
                        <b
                          className={styles.mrIbrahim}
                        >{`Erkin va Saida qizi`}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent6}>
            <div className={styles.frameWrapper2}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/mobile/vector-42.svg"
                />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/mobile/vector-51.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/mobile/vector-61.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/mobile/vector-71.svg"
                />
              </div>
            </div>
            <img className={styles.frameChild} alt="" src="/mobile/group-451.svg" />
            <div className={styles.frameWrapper4}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/mobile/vector-81.svg"
                />
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="/mobile/vector-71.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vectorParent1}>
          <img className={styles.vectorIcon6} alt="" src="/mobile/vector-101.svg" />
          <img className={styles.vectorIcon7} alt="" src="/mobile/vector-112.svg" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
