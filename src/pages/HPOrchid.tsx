import { FunctionComponent } from "react";
import FrameComponent7 from "../components/mobile/FrameComponent7";
import FrameComponent6 from "../components/mobile/FrameComponent6";
import GettingMerried from "../components/mobile/GettingMerried";
import FrameComponent3 from "../components/mobile/FrameComponent3";
import FrameComponent1 from "../components/mobile/FrameComponent1";
// import FrameComponent from "../components/FrameComponent";
import styles from "./HPOrchid.module.css";

const HPOrchid: FunctionComponent = () => {
  return (
    <div className={styles.hpOrchid}>
      <section className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} alt="" src="/mobile/mask-group@2x.png" />
        <img className={styles.vectorIcon} alt="" src="/mobile/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/mobile/vector-14.svg" />
        <img className={styles.vectorIcon2} alt="" src="/mobile/vector-24.svg" />
        <img
          className={styles.vectorIcon3}
          loading="lazy"
          alt=""
          src="/mobile/vector-32.svg"
        />
      </section>
      <section className={styles.hpOrchidInner}>
        <div className={styles.frameParent}>
         <br /> 
         <br /> 
         <br /> 
         <br /> 
         <br /> 
         <br /> 
         <br /> 
         <br /> 
         <br /> 
        </div>
      </section>
      <section className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src="/mobile/group-7@2x.png" />
        <div className={styles.frameItem} />
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/mobile/frame-366@2x.png"
        />
      </section>
      <FrameComponent7 />
      <FrameComponent6 />
      <section className={styles.frameContainer}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon4}
            loading="lazy"
            alt=""
            src="/mobile/vector-121.svg"
          />
          <img
            className={styles.vectorIcon5}
            loading="lazy"
            alt=""
            src="/mobile/vector-131.svg"
          />
        </div>
        <div className={styles.gettingMerriedParent}>
          <GettingMerried />
          <FrameComponent3 />
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper2}>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon6}
                    loading="lazy"
                    alt=""
                    src="/mobile/vector-141.svg"
                  />
                  <img
                    className={styles.vectorIcon7}
                    loading="lazy"
                    alt=""
                    src="/mobile/vector-15.svg"
                  />
                </div>
              </div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon8}
                  alt=""
                  src="/mobile/vector-161.svg"
                />
              </div>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/mobile/group-471.svg"
              />
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon9}
                  alt=""
                  src="/mobile/vector-161.svg"
                />
              </div>
            </div>
          </div>
          <FrameComponent1 />
        </div>
      </section>
      {/* <FrameComponent /> */}
    </div>
  );
};

export default HPOrchid;
