import User from "../models/User.js"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

export const addUser = async (req, res) => {
    const user = new User(req.body)

    try {
        const insertUser = await user.save()
        res.status(201).json(insertUser)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

export const editUser = async (req, res) => {
    try {
        const updateUser = await User.updateOne({ _id: req.params.id }, { $set: req.body })
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const removeUser = await User.deleteOne({ _id: req.params.id })
        res.status(200).json(removeUser)
    } catch (err) {
        res.status(400).json({ 
            message: err.message
        })
    }
}