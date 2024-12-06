"use client"

import styles from "./page.module.css";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function HomePage() {
    const router = useRouter();
    const [selectedStars, setSelectedStars] = useState(null);

    const handleStarClick = (starValue) => {
        setSelectedStars(starValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedStars) {
            alert("Please select a star rating before submitting.");
        } else {
            router.push(`/ThanksPage?stars=${selectedStars}`);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.star}>
                    <img src="/images/icon-star.svg" alt="star"/>
                </div>
                <h1 className={styles.title}>How did we do?</h1>
                <p className={styles.text}>Please let us know how we did with your support request. All feedback is
                    appreciated
                    to help us improve our offering!</p>
                <div className={styles.numbers}>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div
                            key={num}
                            className={`${styles.number} ${selectedStars === num ? styles.selected : ""}`}
                            onClick={() => handleStarClick(num)}
                        >
                            {num}
                        </div>
                    ))}
                </div>
                <form className={styles.submitBtn} onClick={handleSubmit}>
                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    );
}
