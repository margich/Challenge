const { Personnel } = require('../config/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = (req, res, next) => {
    Personnel.findOne({
            where: {
                personnel_phone: req.body.phone
            }
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    error: 'User does not exist'
                })
            } else {
                bcrypt.compare(req.body.password, user.personnel_password, (err, isMatch) => {
                    if (err) {
                        return res.status(401).json({
                            error: err
                        })
                    }
                    if (isMatch) {
                        const JWT_KEY = process.env.JWT_KEY || "secret";
                        const accessToken = jwt.sign({
                                phone: user.personnel_phone,
                                id: user.personnel_id
                            },
                            JWT_KEY, {
                                expiresIn: "24h"
                            }
                        )
                        return res.status(200).json({
                            reset_password: user.reset_password,
                            accessToken: accessToken,
                            expires_in: "24h"
                        })
                    } else {
                        return res.status(401).json({
                            error: {
                                password: 'You have entered an incorrect password'
                            }
                        })
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err.message,
            });
        });
}