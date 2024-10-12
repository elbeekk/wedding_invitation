import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.ourStoryWrapper, className].join(" ")}>
      <div className={styles.ourStory} data-scroll-to="ourStoryContainer">
        <div className={styles.frameParent}>
          <FrameComponent2 maskGroup="/mobile/kuyov2.jpeg" text="Samarqand viloyati, Payariq tumanida 06.05.1995 yili tug’ilgan. 6-maktabni bitirgan va Samarqand Davlat Universitetini Amaliy matematika va informatika fakultetida o’qigan." />
          <FrameComponent2
            maskGroup="/mobile/kelin2.jpeg"
            propPadding="var(--padding-4xl) var(--padding-mini)"
            propPadding1="10px"
            text="Jizzax viloyati, Paxtakor tumanida 18.12.2000 yili tug’ilgan. 164-maktabni bitirgan va O‘zbekiston davlat jahon tillari universitetini Rus tili filologiyasini tamomlagan."
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
