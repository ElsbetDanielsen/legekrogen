import { useEffect, useState } from "react"

const fetchProducts = () => {
  const [toys, setToys] = useState([])

  const fetchToys = async () => {
      const response = await fetch("https://legekrogen.webmcdm.dk/products/")
      const data = await response.json()
      setToys(data)
  }

  useEffect(() => {
      fetchToys()
  }, [])

  return {
      toys
  }
}

export default fetchProducts

