import { Request, Response } from 'express';

import jwt from '../utils/jwt.util';
import User, { IUser } from '../models/user.model';
import { getMessage } from '../utils/message.util';
import { matchPassword } from '../utils/password.util';

const signIn = async (req: Request, res: Response) => {
    const [hashType, hash] = req.headers.authorization!.split(' ');

    if (hashType !== 'Basic') {
        return res.status(401).json({
            message: getMessage('default.unauthorized'),
        });
    }

    const [email, supposedPassword] = Buffer.from(hash, 'base64')
        .toString()
        .split(':');

    const user = await User.findOne({ email: email }).select(['password']);
    const match = user ? matchPassword(user.password, supposedPassword) : null;

    if (!match) {
        return res.status(401).json({
            message: getMessage('default.unauthorized'),
        });
    }
    const token = jwt.generateJwt(
        {
            _id: user!._id,
            tokenVersion: user!.tokenVersion,
        },
        1,
    );
    const refreshToken = jwt.generateJwt(
        {
            _id: user!._id,
            tokenVersion: user!.tokenVersion,
        },
        2,
    );

    req.headers.authorization = `Bearer ${token}`;
    
    /*res.cookie('jid', refreshToken, {
        httpOnly: true,
        path: '/refresh-token',
    });*/

    return res.status(200).json({
        data: { email: user!.email },
        message: getMessage('user.valid.sign_in.success'),
        metadata: { accessToken: token, refreshToken: refreshToken },
    });
};

export default { signIn };