import styles from "./spørg.module.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

function FAQ({ faq, index, toggleFAQ }) {

  return (
    <div className={`${styles.faq} ${faq.open ? styles.open : styles.closed}`} onClick={() => toggleFAQ(index)}>
      <div className={styles.questionContainer}>
        <div className={styles.faqQuestion}>
          <p>{faq.question}</p>
        </div>
        <div>
          {faq.open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {faq.open && <p className={styles.faqAnswer}>{faq.answer}</p>}
    </div>
  )
}

export default FAQ