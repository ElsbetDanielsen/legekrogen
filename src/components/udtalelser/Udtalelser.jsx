import styles from './udtalelser.module.css'

function Udtalelser() {

    return(
        <div className={styles.parent}>
            <div className={styles.heading}>
              <h2>Vores kunder</h2>
              <h1>UDTALER</h1>
            </div>

            <div className={styles.content}>
                <p className={styles.text}>“Pakken kom dagen efter jeg bestilte. Der blev jeg positivt overrasket, da der står på deres hjemmeside at leveringstiden er 2-4 hverdage. Og min lille Hugo elsker sin nye træhest.”</p>
                <p className={styles.from}>- Heidi, mor til Hugo på 3 år</p>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>“Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede Legekrogens kundeservice, var de meget hurtige til at sende mig den rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget lækkert”</p>
                <p className={styles.from}>- Omar, onkel til Anton på 11 år</p>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>“Når jeg skal bestille julegaver til alle mine 14 børnebørn, er det næsten en umulig opgave. Mine døtre har meget høje krav, når det kommer til legetøj til deres børn. Jeg tør næsten ikke købe noget. Men efter min gode ven Lars tippede mig om Legekrogen.dk, har jeg ikke længere problemer med at købe de perfekte julegaver. Tak til Legekrogen. Og Lars”</p>
                <p className={styles.from}>- Karsten Hansen, Morfar</p>
            </div>
        </div>
    )
}

export default Udtalelser