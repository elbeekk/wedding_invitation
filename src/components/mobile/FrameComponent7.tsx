import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.hpOrchidInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.asepPutriParent}>
            <h1 className={styles.asepPutri}>{`Orifjon & Maftuna`}</h1>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.wrapper}>
                    <div className={styles.div}>06 11 2024</div>
                  </div>
                </div>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameItem} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.arrowWrapper}>
            <img
              className={styles.arrowIcon}
              loading="lazy"
              alt=""
              src="/mobile/arrow@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
