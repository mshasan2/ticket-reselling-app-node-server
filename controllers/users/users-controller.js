import * as usersDao from './users-dao.js';

const createUser = async (req, res) => {
    const newUser = await usersDao.createUser(req.body);
    res.json(newUser);
}

const findAllUsers = async (req, res) => {
    const users = await usersDao.findAllUsers();
    res.json(users);
}

const findUserById = async (req, res) => {
    const userId = req.params['userId'];
    const user = await usersDao.findUserById(userId);
    res.json(user);
}

const findUserByUsername = async (req, res) => {
    const username = req.params['username'];
    const user = await usersDao.findUserByUsername(username);
    res.json(user);
}

const updateUser = async (req, res) => {
    const userId = req.params['userId'];
    const user = req.body;
    const status = await usersDao.updateUser(userId, user);
    if (status.modifiedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params['userId'];
    const status = await usersDao.deleteUser(userId);
    if (status.deletedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }
}


const register = async (req, res) => {
    const username = req.body['Username'];
    const password = req.body['Password'];
    const user = await usersDao.findUserByUsername(username);
    if (user) {
        res.sendStatus(409);
        return
    }
    const newUser = await usersDao.createUser(req.body);
    req.session['currentUser'] = newUser;
    res.json(newUser);
}


const profile = async (req, res) => {
    const currentUser = req.session['currentUser'];
    if (!currentUser) {
        res.sendStatus(404);
        return
    } 
    res.json(currentUser);
};

const login = async (req, res) => {
    const username = req.body['Username'];
    const password = req.body['Password'];
    const user = await usersDao.findUserByCredentials(username, password);
    if (user) {
        req.session['currentUser'] = user;
        res.json(user);
    } else {
        res.sendStatus(404);
    }
};

const logout = async (req, res) => {
    if (!req.session.currentUser) {
        res.sendStatus(404);
        return
    }
    req.session.destroy();
    res.sendStatus(200);
};

export default (app) => {
    app.post('/api/users', createUser);
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:userId', findUserById);
    app.get('/api/users/:username', findUserByUsername);
    app.put('/api/users/:userId', updateUser);
    app.delete('/api/users/:userId', deleteUser);
    app.post('/api/users/register', register);
    app.get('/api/users/profile', profile);
    app.post('/api/users/login', login);
    app.post('/api/users/logout', logout);
}

