import CreateUserForm from '../components/createUserForm/CreateUserForm'
import PageHeader from '../components/pageHeader/pageHeader'
import medlem from "/assets/hero/medlem.jpg"

function Kundeklubben() {
  
  return (
    <>
      <PageHeader text="Bliv medlem af vores" title="Kundeklub" subtext="og få ekslusive tilbud og nyheder før alle andre" img={medlem} />
      <CreateUserForm />
    </>
  )
}
  
export default Kundeklubben