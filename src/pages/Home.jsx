import Header from "../components/frontPageHeader/Header"
import Udtalelser from "../components/udtalelser/Udtalelser"
import Recommended from "../components/reccomended/recommended"

function Home() {
  
  return (
    <>
      <Header />
      <Recommended />
      <Udtalelser />
    </>
  )
}

export default Home