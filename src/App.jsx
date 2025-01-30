import { useRoutes, useLocation } from "react-router-dom"

import Fragt from "./components/fragt/Fragt.jsx"
import NavBar from "./components/navigation/Navigation"
import Kundeklub from "./components/kundeklub/Kundeklub.jsx"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products.jsx"
import Faq from "./pages/Faq.jsx"
import Kundeklubben from "./pages/Kundeklubben.jsx"
import SuccessPage from "./components/successPage/SuccessPage.jsx"

function App() {
  const location = useLocation()
  const isFragtPage = ["/", "/products", "/faq", "/kundeklubben"].includes(location.pathname)
  const isSuccessPage = location.pathname === "/success"
  const isPage = ["/", "/products", "/faq"].includes(location.pathname)


  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/faq", element: <Faq /> },
    { path: "/kundeklubben", element: <Kundeklubben /> },
    { path: "/success", element: <SuccessPage /> },
  ])

  return (
    <>
      { isFragtPage && <Fragt /> }
      { !isSuccessPage && <NavBar /> }
      <div>{routes}</div>
      { isPage && <Kundeklub /> }
      { !isSuccessPage && <Footer /> } 
    </>
  )
}

export default App