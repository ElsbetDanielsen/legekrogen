import styles from "./fragt.module.css"

import { FaTruck } from "react-icons/fa"

function Fragt() {

    return (
        <div className={styles.fragt}>
            <p><FaTruck size={15} /> Fri fragt ved køb over 499,-</p>
        </div>
    )
}
  
export default Fragt