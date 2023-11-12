import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Male")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:5000/users", {
                name,
                email,
                gender
            })
            
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="columns mt-5">
            <div className="column is-half">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name" className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} id="name" />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="email" className="label">Email</label>
                        <div className="control">
                            <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="gender" className="label">Gender</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
