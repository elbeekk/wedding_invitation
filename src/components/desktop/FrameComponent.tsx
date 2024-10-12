import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.asepWrapper}>
            <h1 className={styles.asep}>Maftuna</h1>
          </div>
          <div className={styles.asepDivider}>
            <h1 className={styles.putri}>Orifjon</h1>
          </div>
        </div>
      </div>
      <div className={styles.borderFooter}>
        <img
          className={styles.borderFooterIcon}
          loading="lazy"
          alt=""
          src="/desktop/frame-367@2x.png"
        />
        <img
          className={styles.borderFooterIcon1}
          loading="lazy"
          alt=""
          src="/desktop/vector-20.svg"
        />
        <img className={styles.borderFooterIcon2} alt="" src="/desktop/vector-21.svg" />
        <img
          className={styles.borderFooterChild}
          loading="lazy"
          alt=""
          src="/desktop/frame-46@2x.png"
        />
        <img
          className={styles.borderFooterIcon3}
          loading="lazy"
          alt=""
          src="/desktop/vector-22.svg"
        />
        <img className={styles.borderFooterIcon4} alt="" src="/desktop/vector-23.svg" />
        <img
          className={styles.borderFooterIcon5}
          loading="lazy"
          alt=""
          src="/desktop/frame-365@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
