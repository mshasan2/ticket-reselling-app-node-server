import UserModel from "./users-model.js";

export const createUser = async (user) => {
/*
    return await UserModel.create(user);
*/

    try {
        return await UserModel.create(user);
    } catch (err) {
        console.error('Error creating user:', err);
        throw new Error('Unable to create user');
    }
}

export const findAllUsers = async () => {
    return await UserModel.find();
}

export const findUserById = async (userId) => {
    return UserModel.findById(userId);
}

export const updateUser = async (userId, user) => {
    return await UserModel.updateOne({_id: userId}, {$set: user})
}

export const deleteUser = async (userId) => {
    return await UserModel.deleteOne({_id: userId})
}

export const findUserByUsername = async (username) => {
    return await UserModel.findOne({Username: username});
}

export const findUserByCredentials = async (username, password) => {
    return await UserModel.findOne({Username: username, Password: password});
}

