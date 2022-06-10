"use strict"
const jwt = require('jsonwebtoken');

const pass_sign_token = 'nvdinh_11062022';

/**
 * Phương thức này để tạo mới token
 * @param {*} req 
 * @param {*} expires 
 */
const sign = (req, expires = 60000) => { // default 1 phút

  const token = jwt.sign({
    username: req.json_data.username,
    password: req.json_data.password,
  },
    pass_sign_token
    ,
    {
      expiresIn: expires
    }
  );

  return token;
}

class TokenHandler {

  /**
   * Xác thực lại token có hợp lệ không?
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  verify(req, res, next) {
    //xác thực token truyền lên:
    jwt.verify(req.token, pass_sign_token,
      (err, decoded) => {
        if (err) {
          console.log('Lỗi xác thực:', err.message);
          res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ status: 'NOK', message: 'Lỗi xác thực!', error: err.message }));
        } else {
          // console.log('decoded:', decoded);
          req.user = decoded;
          next();
        };
      })
  }

  /**
   * Lấy token truyền lên
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  getToken(req, res, next) {

    const token = req.headers['authorization'];
    req.token = token && token.startsWith('Bearer ') ? token.slice(7) : token;

    next();
  }

  /**
   * Tạo mới 1 token
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  requestNewToken(req, res, next) {
    req.token = sign(req, '10h');
    next();
  }
}

module.exports = new TokenHandler();