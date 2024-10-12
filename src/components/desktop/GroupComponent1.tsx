import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sliderRangeParent, className].join(" ")}>
      <div className={styles.sliderRange}>
        <img
          className={styles.progressBarIcon}
          alt=""
          src="/desktop/progress-bar.svg"
        />
        <img className={styles.vectorIcon} alt="" src="/desktop/vector-1.svg" />
      </div>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon1} alt="" src="/desktop/vector-2.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.footerBarWrapper}>
          <img className={styles.footerBarIcon} alt="" src="/desktop/vector-3.svg" />
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/desktop/group-45.svg"
        />
        <div className={styles.vectorContainer}>
          <img className={styles.vectorIcon2} alt="" src="/desktop/vector-4.svg" />
        </div>
      </div>
      <div className={styles.vectorFrame}>
        <img className={styles.vectorIcon3} alt="" src="/desktop/vector-5.svg" />
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon4} alt="" src="/desktop/vector-6.svg" />
        <img className={styles.vectorIcon5} alt="" src="/desktop/vector-7.svg" />
      </div>
    </div>
  );
};

export default GroupComponent1;
