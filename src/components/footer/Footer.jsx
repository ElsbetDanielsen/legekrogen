import styles from "./footer.module.css"

import { FaRegEnvelope, FaPhoneAlt, FaFacebook } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

function Footer() {

    return (
        <footer>
            <div>
                <h1>Kundeservice</h1>
                <div className={styles.info}>
                    <p><FaRegEnvelope /> kontakt@legehjørnet.dk</p>
                    <p><FaPhoneAlt /> +45 23 45 67 89</p>
                </div>
            </div>
            <div>
                <h1>Følg os</h1>
                <div> 
                    <FaFacebook size={60} />
                    <AiFillInstagram size={70} />
                </div>
            </div>
        </footer>
    )
}

export default Footer