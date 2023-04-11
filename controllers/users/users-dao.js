import UserModel from "./users-model.js";

export const createUser = (user) => {
    return UserModel.create(user);
}

export const findAllUsers = () => {
    return UserModel.find();
}

export const findUserById = (userId) => {
    return UserModel.findById(userId);
}

export const updateUser = (userId, user) => {
    return UserModel.updateOne({_id: userId}, {$set: user})
}

export const deleteUser = (userId) => {
    return UserModel.deleteOne({_id: userId})
}

export const findUserByUsername = (username) => {
    return UserModel.findOne({Username: username});
}

export const findUserByCredentials = (username, password) => {
    return UserModel.findOne({Username: username, Password: password});
}

