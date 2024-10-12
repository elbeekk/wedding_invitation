import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  maskGroup?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  text: string
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  maskGroup,
  propPadding,
  propPadding1,
  text
}) => {
  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={[styles.maskGroupParent, className].join(" ")}>
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className={styles.frameWrapper} style={frameDiv6Style}>
        <div
          className={styles.loremIpsumDolorSitAmetCoWrapper}
          style={frameDiv7Style}
        >
          <div className={styles.loremIpsumDolor}>
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
