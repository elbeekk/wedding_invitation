import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.attendanceLotusParent}>
          <img
            className={styles.attendanceLotusIcon}
            loading="lazy"
            alt=""
            src="/desktop/vector-8.svg"
          />
          <img className={styles.vectorIcon} alt="" src="/desktop/vector-9.svg" />
        </div>
      </div>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon1} alt="" src="/desktop/vector-10.svg" />
      </div>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/desktop/group-47.svg"
      />
      <div className={styles.vectorContainer}>
        <img className={styles.vectorIcon2} alt="" src="/desktop/vector-11.svg" />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon3}
            loading="lazy"
            alt=""
            src="/desktop/vector-12.svg"
          />
          <img className={styles.vectorIcon4} alt="" src="/desktop/vector-13.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
