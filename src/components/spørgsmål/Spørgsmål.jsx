import { useState } from "react"
import FAQ from "./Faq"
import styles from "./spørg.module.css"

function Spørgsmål() {
    const [faqs, setFaqs] = useState([
        {
            question: "Hvor lang tid er leveringstiden?",
            answer: "2-4 hverdage. Det kan tage længere tid op til højtider og helligdage.",
            open: false,
        },
        {
            question: "Hvad kan jeg gøre, hvis jeg finder varen billigere et andet sted?",
            answer: [
                "Vil prismatcher på følgende parametre:", <br />,
                "• Varen skal være i samme model, farve og evt. størrelse.", <br />,
                "• Prisen skal gælde på handelstidspunktet.", <br />,
                "• Varen skal være på lager hos konkurrenten på tidspunktet for prismatch."
              ],
            open: false,
        },
        {
            question: "Hvor lang tid har jeg til at returnere?",
            answer: "Vi tilbyder 30 dages retur/bytteret fra den dag, hvor du modtager varerne.",
            open: false,
        },
    ])

    const toggleFAQ = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) => ({
                ...faq, 
                open: i === index ? !faq.open : false,
            }))
        )
    }

    return (
        <section className={styles.spørg}>
            <div className={styles.faqs}>
                {faqs.map((faq, index) => (
                    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </section>
    )
}

export default Spørgsmål