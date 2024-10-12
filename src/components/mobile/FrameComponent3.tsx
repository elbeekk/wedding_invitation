import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent4 from "./FrameComponent4";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.wrapperMapWrapper}>
          <div className={styles.wrapperMap}>
            {/* <img
              className={styles.mapIcon}
              loading="lazy"
              alt=""
              src="https://www.google.com/maps?q=39.658515,66.905098"
            /> */}
          </div>
        </div>
        <div className={styles.ceremonyParent}>
          <div className={styles.ceremony}>
            <div className={styles.wrapperGroup11Parent}>
              <div className={styles.wrapperGroup11}>
                <img
                  className={styles.wrapperGroup11Child}
                  alt=""
                  src="/mobile/group-12@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <FrameComponent5
                  weddingRing="/mobile/weddingring1.svg"
                  weddingCeremony="Grand Asli toyxonasi"
                  vector10="/vector-113.svg"
                  prop="16.00 - 19.00"
                  propAlignSelf="unset"
                  propPadding="unset"
                  propWidth="208px"
                  propMinWidth="111px"
                />
                <div className={styles.frameWrapper1}>
                  <FrameComponent4
                    rafflesHotel="To'yxona"
                    jlTerusanJakartaNo53Cicah="Manzil Samarqand shaxar"
                    propPadding="var(--padding-3xs) var(--padding-11xl)"
                    propPadding1="10px"
                    propTextAlign="left"
                    propPadding2="10px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.itIsAnHonorAndHappinessFWrapper}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
