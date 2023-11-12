import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const UserList = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users")
        setUsers(response.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            getUsers()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="columns mt-5">
            <div className="column is-half">
                <Link className="button is-success is-small" to={"/add"}>
                    Add New
                </Link>

                <table className="table is-striped is-fullwidth mt-5">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link to={`/edit/${user._id}`} className="button is-info is-small">
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteUser(user._id)} className="button is-danger is-small">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList
