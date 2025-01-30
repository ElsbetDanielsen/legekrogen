import { Link } from "react-router-dom"
import styles from "./kundeklub.module.css"

function Kundeklub() {

    return(
        <div className={styles.kundeklub}>
            <p>Kunne du også tænke dig at blive medlem af vores</p>
            <h2>Kundeklub?</h2>
            <Link to="/kundeklubben"><button>BLIV MEDLEM NU!</button></Link>
        </div>
    )
}

export default Kundeklub