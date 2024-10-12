import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  weddingRing?: string;
  weddingCeremony?: string;
  putri?: string;
  prop?: string;
  rafflesHotel?: string;
  jlTerusanJakartaNo53Cicah?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propHeight?: CSSProperties["height"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding1?: CSSProperties["padding"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propTextAlign?: CSSProperties["textAlign"];
  propDisplay?: CSSProperties["display"];
  propFlex?: CSSProperties["flex"];
  propWidth3?: CSSProperties["width"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  weddingRing,
  weddingCeremony,
  putri,
  prop,
  rafflesHotel,
  jlTerusanJakartaNo53Cicah,
  propAlignSelf,
  propWidth,
  propWidth1,
  propMaxHeight,
  propHeight,
  propAlignSelf1,
  propPadding,
  propMinWidth,
  propPadding1,
  propAlignSelf2,
  propWidth2,
  propTextAlign,
  propDisplay,
  propFlex,
  propWidth3,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const putriIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      maxHeight: propMaxHeight,
      height: propHeight,
    };
  }, [propWidth1, propMaxHeight, propHeight]);

  const borderFooterStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      padding: propPadding,
    };
  }, [propAlignSelf1, propPadding]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const layoutContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth2,
    };
  }, [propAlignSelf2, propWidth2]);

  const rafflesHotelStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      display: propDisplay,
    };
  }, [propTextAlign, propDisplay]);

  const jlTerusanJakartaStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth3,
    };
  }, [propFlex, propWidth3]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup} style={frameDivStyle}>
        <div className={styles.weddingRingParent}>
          <img
            className={styles.weddingRingIcon}
            loading="lazy"
            alt=""
            src={weddingRing}
          />
          <div className={styles.frameContainer}>
            <div className={styles.weddingCeremonyWrapper}>
              <b className={styles.weddingCeremony}>{weddingCeremony}</b>
            </div>
            <img
              className={styles.putriIcon}
              alt=""
              src={putri}
              style={putriIconStyle}
            />
          </div>
        </div>
        <div className={styles.borderFooter} style={borderFooterStyle}>
          <b className={styles.b} style={bStyle}>
            {prop}
          </b>
        </div>
      </div>
      <div className={styles.frameDiv} style={frameDiv1Style}>
        <div className={styles.frameWrapper}>
          <div className={styles.layoutContainerParent}>
            <div
              className={styles.layoutContainer}
              style={layoutContainerStyle}
            >
              <b className={styles.rafflesHotel} style={rafflesHotelStyle}>
                {rafflesHotel}
              </b>
            </div>
            <div className={styles.logo}>
              <div
                className={styles.jlTerusanJakarta}
                style={jlTerusanJakartaStyle}
              >
                {jlTerusanJakartaNo53Cicah}
              </div>
            </div>
          </div>
        </div>
        <a className={styles.frameButton} href="https://www.google.com/maps?q=39.658515,66.905098" target="_blank">
          <div className={styles.map1Parent}>
            <img className={styles.map1Icon} alt="" src="/desktop/map-1.svg" />
            <div className={styles.openMapWrapper}>
              <b className={styles.openMap}>Open Map</b>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FrameComponent2;
