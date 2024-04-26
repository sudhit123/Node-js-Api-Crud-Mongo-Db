const userSchema = require('../schema')

// userData List
const getAllUserData = async (req, res) => {
    try {
        const userList = await userSchema.find()
        res.send(userList)
    } catch (error) {
        res.send(error)
    }
}

// userListById
const getUseryId = async (req, res) => {
    try {
        const userById = await userSchema.findById(req.params._id)
        res.status(200).send(userById)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}
// userCreate
const createUserData = async (req, res) => {
    try {
        const createUser = new userSchema(req.body)
        await createUser.save();
        res.status(200).json({
            "Success": true,
            "userData": createUser
        })
    } catch (error) {
        res.status(500).send("Internal Server Error ")
    }
}

// userUpdate
const userUpdate = async (req, res) => {
    try {
        const updateById = await userSchema.findByIdAndUpdate(req.params._id, req.body, {
            new: true
        })
        res.status(200).send({
            "Success": true,
            "userData": updateById
        })
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}

// UserDelete
const deleteUser = async (req, res) => {
    try {
        const deleteUser = await userSchema.findByIdAndDelete(req.params._id)
        res.status(200).send({
            "Success": true,
            "userData": deleteUser
        })
    } catch (error) {
        res.status(500).send("Internal server Error")
    }
}

module.exports = { getAllUserData, createUserData, userUpdate, deleteUser,getUseryId }