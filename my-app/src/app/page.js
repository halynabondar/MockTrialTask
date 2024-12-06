import Image from "next/image";
import styles from "./page.module.css";

export default function Homepage() {

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.star}>
                    <img src="/images/icon-star.svg" alt="star"/>
                </div>
                <h1 className={styles.title}>How did we do?</h1>
                <p className={styles.text}>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>
                <div className={styles.numbers}>
                    <div className={styles.number}>1</div>
                    <div className={styles.number}>2</div>
                    <div className={styles.number}>3</div>
                    <div className={styles.number}>4</div>
                    <div className={styles.number}>5</div>
                </div>
                <button className={styles.submitBtn}>Submit</button>
            </div>
        </div>
    );
}
