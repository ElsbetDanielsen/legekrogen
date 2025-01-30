import styles from "./toyscard.module.css"

function ToysCard({ toy }) {

  return (
      <div className={styles.card}>
            <img src={toy.image} alt={toy.title} />
            <div className={styles.cardContent}>
                <div className={styles.brand}>{toy.title}</div>
                <div className={styles.description}>{toy.description}</div>
                <div className={styles.price}>{toy.price} kr</div>
            </div>
      </div>
    )
}

export default ToysCard