import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
  weddingRing?: string;
  weddingCeremony?: string;
  vector10?: string;
  prop?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
  weddingRing,
  weddingCeremony,
  vector10,
  prop,
  propAlignSelf,
  propPadding,
  propWidth,
  propMinWidth,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  const b1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.weddingRingParent}>
        <img
          className={styles.weddingRingIcon}
          loading="lazy"
          alt=""
          src={weddingRing}
        />
        <div className={styles.frameGroup}>
          <div className={styles.weddingCeremonyWrapper}>
            <b className={styles.weddingCeremony}>{weddingCeremony}</b>
          </div>
          <img className={styles.frameChild} alt="" src={vector10} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <b className={styles.b} style={b1Style}>
          {prop}
        </b>
      </div>
    </div>
  );
};

export default FrameComponent5;
