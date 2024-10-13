import { FunctionComponent, useEffect, useState } from "react";
import styles from "./GettingMerried.module.css";

export type GettingMerriedType = {
  className?: string;
};

const GettingMerried: FunctionComponent<GettingMerriedType> = ({
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
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = {
        message: "EXPIRED",
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
    <div className={[styles.gettingMerried, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.assalamualaikumWarrohmatullahWrapper}>
              <h1 className={styles.assalamualaikumWarrohmatullah}>
                <p className={styles.assalamualaikum}>Assalomu alaykum!</p>
              </h1>
            </div>
            <div className={styles.byAskingForTheGraceAndBlWrapper}>
              <div className={styles.byAskingFor}>
                Xurmatli mehmonlar! Sizni 2024 yil 6-noyabr chorshanba kuni
                farzandlarimizning nikox to‘ylari munosabati bilan yoziladigan
                dasturxonimizga tashrif buyurib, aziz mehmonimiz bo‘lishingizni
                so‘raymiz.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.february2022Wrapper}>
          <div className={styles.february2022}>06 Noyabr 2024</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent2}>
            <div className={styles.container}>
              <b className={styles.b}>{timeLeft?.days}</b>
            </div>
            <div className={styles.dWrapper}>
              <h3 className={styles.d}>K</h3>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent1}>
            <div className={styles.wrapper}>
              <div className={styles.div}>{timeLeft?.hours}</div>
            </div>
            <div className={styles.hWrapper}>
              <h3 className={styles.h}>S</h3>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent3}>
            <div className={styles.frame}>
              <b className={styles.b1}>{timeLeft?.minutes}</b>
            </div>
            <div className={styles.mWrapper}>
              <h3 className={styles.m}>M</h3>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper3}>
          <div className={styles.frameParent4}>
            <div className={styles.wrapper1}>
              <b className={styles.b2}>{timeLeft?.seconds}</b>
            </div>
            <div className={styles.sWrapper}>
              <h3 className={styles.s}>S</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingMerried;
