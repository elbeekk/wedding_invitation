import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
  rafflesHotel?: string;
  jlTerusanJakartaNo53Cicah?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propTextAlign?: CSSProperties["textAlign"];
  propPadding2?: CSSProperties["padding"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  rafflesHotel,
  jlTerusanJakartaNo53Cicah,
  propPadding,
  propPadding1,
  propTextAlign,
  propPadding2,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const jlTerusanJakarta1Style: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.rafflesHotelWrapper} style={frameDiv3Style}>
          <b className={styles.rafflesHotel}>{rafflesHotel}</b>
        </div>
        <div
          className={styles.jlTerusanJakartaNo53CicWrapper}
          style={frameDiv4Style}
        >
          <div
            className={styles.jlTerusanJakarta}
            style={jlTerusanJakarta1Style}
          >
            {jlTerusanJakartaNo53Cicah}
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper} style={frameDiv5Style}>
        <a className={styles.frameContainer} href="https://www.google.com/maps?q=39.658515,66.905098" target="_blank">
          <div className={styles.map1Parent}>
            <img className={styles.map1Icon} alt="" src="/mobile/map-11.svg" />
            <div className={styles.openMapWrapper}>
              <div className={styles.openMap}>Open Map</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FrameComponent4;
