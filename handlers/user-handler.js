"use strict"

const { v4: uuidv4 } = require('uuid');

const users = [
    { id: uuidv4(), username: 'admin', password: '123', fullname: 'Admin' },
    { id: uuidv4(), username: 'user', password: '123', fullname: 'User' }
];

const findUserInList = (obj, usersList) => {
    for (const user of usersList) {
        if (user.username === obj.username
            && user.password === obj.password) {
            return user;
        }
    }
    return null;
}

class UserHandler {

    /**
     * Tạo user mới
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    createUser(req, res, next) {
        let user = { id: uuidv4(), ...req.json_data };
        users.push(user);

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'OK', user: user }));
    }

    /**
     * Kiểm tra đăng nhập và trả về thành công hoặc thất bại
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    loginUser(req, res, next) {
        // console.log("json_data: ", req.json_data);
        const token = req.token;
        const user = findUserInList(req.json_data, users);
        if (user) {
            const { password, ...userWithoutPassword } = user;
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ status: 'OK', user: { ...userWithoutPassword, token } }));
        } else {
            res.writeHead(435, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ status: 'NOK', message: 'Đăng nhập thất bại!', error: 'Sai username hoặc password!' }));
        }
    }

    /**
     * Trả về danh sách users
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getUsers(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'OK', users: users }));
    }
}

module.exports = new UserHandler();