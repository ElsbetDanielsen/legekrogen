import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./createUserform.module.css"

const CreateUserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" })
        navigate("/success")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <input
            required
            type="text"
            name="name"
            placeholder="Fulde navn"
            value={formData.name}
            onChange={handleChange}
            className={styles.name}
          />
        </div>

        <div>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.email}
          />
        </div>

        <div>
          <input
            required
            type="text"
            name="message"
            placeholder="Hvem køber du legetøj til?"
            value={formData.message}
            onChange={handleChange}
            className={styles.message}
          />
        </div>

        <button type="submit">BLIV MEDLEM NU!</button>
      </form>
    </div>
  )
}

export default CreateUserForm