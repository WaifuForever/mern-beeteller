import { Request, Response, NextFunction } from 'express';

import User from '../models/user.model';
import jwt from '../utils/jwt.util';
import { getMessage } from '../utils/message.util';

export const auth = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const [, token] = req.headers.authorization
                ? req.headers.authorization.split(' ')
                : [, ''];

            let payload: any = null;
            try {
                payload = jwt.verifyJwt(token, 1);
            } catch (err) {
                console.log(err);
                //Invalid Token
                return res.status(401).json({
                    message: getMessage('default.unauthorized'),
                    err: err,
                });
            }

            User.exists({
                _id: payload._id,
                active: true,
                token_version: payload.token_version,
            })
                .then(result => {
                    req.auth = payload._id;
                    let current_time = Date.now().valueOf() / 1000;
                    if (
                        (payload.exp - payload.iat) / 2 >
                        payload.exp - current_time
                    ) {
                        let newToken = jwt.generateJwt(
                            {
                                _id: payload.id,
                                tokenVersion: payload.tokenVersion,
                            },
                            1,
                        );
                        req.new_token = `Bearer ${newToken}`;
                        console.log(`New Token: ${newToken}`);
                    } else {
                        console.log('Token not expired');
                    }

                    payload = null;
                    next();
                })
                .catch(err => {
                    console.log(err);
                    return res.status(400).json({
                        message: getMessage('default.badRequest'),
                        err: err,
                    });
                });
        } catch (err) {
            console.log(err);
            return res.status(401).json({
                message: getMessage('default.unauthorized'),
                err: err,
            });
        }
    };
};