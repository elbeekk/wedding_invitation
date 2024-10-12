import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.hpOrchidInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/mobile/vector-41.svg"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/mobile/vector-43.svg"
              />
            </div>
            <div className={styles.wrapperEllipse5Parent}>
              <div className={styles.wrapperEllipse5}>
                <img
                  className={styles.wrapperEllipse5Child}
                  alt=""
                  src="/mobile/ellipse-51.svg"
                />
              </div>
              <div className={styles.frameInner} />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.asepWrapper}>
                <h1 className={styles.asep}>Asep</h1>
              </div>
              <div className={styles.putriWrapper}>
                <h1 className={styles.putri}>Putri</h1>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/mobile/frame-364@2x.png"
            />
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent3}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/mobile/vector-18.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/mobile/vector-19.svg"
                />
              </div>
            </div>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/mobile/group-45-1@2x.png"
            />
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent4}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/mobile/vector-201.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon3}
                  loading="lazy"
                  alt=""
                  src="/mobile/vector-211.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
