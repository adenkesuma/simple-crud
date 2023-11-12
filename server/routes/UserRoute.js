import express from "express"
import { 
    getUsers,
    getUserById,
    addUser,
    editUser,
    deleteUser
} from "../controllers/UserController.js"

const router = express.Router()

router.get("/users", getUsers)
router.get("/users/:id", getUserById)
router.post("/users/", addUser)
router.patch("/users/:id", editUser)
router.delete("/users/:id", deleteUser)

export default router