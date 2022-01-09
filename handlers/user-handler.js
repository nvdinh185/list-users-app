"use strict"

const { v4: uuidv4 } = require('uuid');

class UserHandler {

    /**
     * Tạo user mới
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    createUser(req, res, next) {
        let user = { id: uuidv4(), ...req.json_data };
        // console.log(user);

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'OK', user: user, token: req.token }));
    }

    /**
     * Kiểm tra đăng nhập và trả về thành công hoặc thất bại
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    loginUser(req, res, next) {
        // console.log(req.user);
        // console.log("json_data: ", req.json_data);
        if (req.user) {
            if (
                req.user.username === req.json_data.username &&
                req.user.password === req.json_data.password
            ) { //username và password của token và post là giống nhau
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ status: 'OK', message: 'Đăng nhập thành công!' }));
            } else {
                res.writeHead(435, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ status: 'NOK', message: 'Đăng nhập thất bại!', error: 'Sai username hoặc password!' }));
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ status: 'NOK', message: 'Lỗi xác thực', error: req.error }));
        }
    }
}

module.exports = new UserHandler();