import styles from './card.module.css'

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardtext}>
                <h1>What is Vaccine?</h1>
                <h2>Vaccination is a simple, safe, and effective way of protecting you against harmful diseases, before you come into contact with them. It uses your body’s natural defenses to build resistance to specific infections and makes your immune system stronger.</h2>
                <h3>See more detail...</h3>
            </div>
        </div>
    )
}