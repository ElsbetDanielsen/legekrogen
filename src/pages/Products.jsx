import ProductPage from "../components/productPage/ProductPage"
import PageHeader from "../components/pageHeader/pageHeader"
import produkter from "/assets/hero/produkter.jpg"

function Products() {

  return (
    <>
      <PageHeader text="På udkig efter nyt" title="Legetøj" img={produkter} />
      <ProductPage />
    </>
  )
}

export default Products