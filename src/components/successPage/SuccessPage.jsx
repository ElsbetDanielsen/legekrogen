import { useNavigate } from "react-router-dom"
import styles from "./success.module.css"

function SuccessPage() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate("/")
  }

  return (
    <div className={styles.successPage}>
      <div className={styles.text}>
        <h1>Tak!</h1>
        <p className={styles.textOne}>Vi er så glade for at du vil være en del af vores kundeklub.</p>
        <p className={styles.textTwo}>Tag et kig i din indbakke. Vi har givet dig fri fragt på din første ordre.</p>
      </div>
      <button onClick={handleGoHome}>TIL FORSIDEN</button>
    </div>
  )
}

export default SuccessPage