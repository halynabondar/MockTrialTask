"use client"

import styles from "../page.module.css";
import {useSearchParams} from "next/navigation";

export default function ThanksPage() {
    const searchParams = useSearchParams();
    const stars = searchParams.get("stars" || "0");

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.thankYouImage}>
                    <img src="/images/illustration-thank-you.svg" alt="thank"/>
                </div>
                <div className={styles.selectedStars}>You selected {stars} out of 5</div>
                <h1 className={styles.titleThanks}>Thank you!</h1>
                <p className={styles.textThanks}>We appreciate you taking the time to give a rating. If you ever need
                    more support,
                    don’t hesitate to get in touch!</p>
            </div>
        </div>
    );
}
