import { FunctionComponent, useEffect, useState } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const calculateTimeLeft = (): {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    message?: string;
  } => {
    const countDownDate = new Date("Nov 6, 2024 16:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    let timeLeft = {};

    if (distance > 0) {
      timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    } else {
      timeLeft = {
        message: "EXPIRED"
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.container}>
            <div className={styles.div1}>{timeLeft?.days}</div>
          </div>
          <div className={styles.dWrapper}>
            <h3 className={styles.d}>Kun</h3>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <div className={styles.div}>{timeLeft?.hours}</div>
          </div>
          <div className={styles.messageInput}>
            <h3 className={styles.h}>Soat</h3>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent1}>
          <div className={styles.frame}>
            <div className={styles.div2}>{timeLeft?.minutes}</div>
          </div>
          <div className={styles.mWrapper}>
            <h3 className={styles.m}>Minut</h3>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.frameParent2}>
          <div className={styles.wrapper1}>
            <div className={styles.div3}>{timeLeft?.seconds}</div>
          </div>
          <div className={styles.sWrapper}>
            <h3 className={styles.s}>Sekund</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
