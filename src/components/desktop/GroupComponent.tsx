import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.wrapperGroup12Parent, className].join(" ")}>
      <div className={styles.wrapperGroup12}>
        <img
          className={styles.wrapperGroup12Child}
          alt=""
          src="/desktop/group-11@2x.png"
        />
      </div>
      <div className={styles.frameChild} />
      <FrameComponent2
        weddingRing="/desktop/dinnertable.svg"
        weddingCeremony="Nahorgi osh"
        putri="/putri.svg"
        prop="07.00 - 08.00"
        rafflesHotel="To'yxona"
        jlTerusanJakartaNo53Cicah="Jizzax viloyati, Jizzax shahri, Islom Karimov shoh ko`chasi"
      />
    </div>
  );
};

export default GroupComponent;
