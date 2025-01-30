import { useEffect, useState } from "react"

const RecommendedProducts = () => {
  const [toys, setToys] = useState([])

  const fetchToys = async () => {
      const response = await fetch("https://legekrogen.webmcdm.dk/products/")
      const data = await response.json()
      const recommendedData = data.filter((data) => data.recommended == true)
      setToys(recommendedData)
  }

  useEffect(() => {
      fetchToys()
  }, [])

  return {
      toys
  }
}

export default RecommendedProducts