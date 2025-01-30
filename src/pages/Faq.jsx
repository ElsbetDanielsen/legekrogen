import PageHeader from '../components/pageHeader/pageHeader'
import Spørgsmål from '../components/spørgsmål/Spørgsmål'
import FAQ from "/assets/hero/FAQ.jpg"

function Faq() {

  return (
    <>
      <PageHeader text="Har du nogle" title="Spørgsmål?" subtext="Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os" img={FAQ} />
      <Spørgsmål />
    </>
  )
}

export default Faq