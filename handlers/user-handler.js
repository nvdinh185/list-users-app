"use strict"

class UserHandler {

    /**
     * Tạo user mới
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async createUser(req, res, next) {
        let user = { id: new Date().getTime(), ...req.json_data };
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
    async loginUser(req, res, next) {
        console.log(req.user);
        console.log("json_data: ", req.json_data);
        if (req.user) {
            if (req.user.username === req.json_data.username) { //email của token và post là giống nhau
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ status: 'OK', message: 'Đăng nhập thành công!' }));
            } else {
                res.writeHead(435, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ status: 'NOK', message: 'Đăng nhập thất bại!' }));
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ status: 'NOK', message: 'Lỗi xác thực', error: req.error }));
        }
    }

    /**
     * Trả về token
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getUserInfo(req, res, next) {
        if (req.user) {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ status: "OK", token: req.token }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ status: 'NOK', message: 'Lỗi xác thực', error: req.error }));
        }
    }
}

module.exports = new UserHandler();