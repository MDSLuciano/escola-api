import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) =>{
    const { authorization } = req.headers; //Isso é mandando no header da requisição

    if(!authorization) {
        return res.status(401).json({
            errors: ["Login Required"],
        })
    }

    const[, token] = authorization.split(" ")//Significa que iremos pegar a separação do texto no espaço.

    try{
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = dados;

        const user = await User.findOne({
            where: {
                id,
                email,
            },
        })

        if(!user){
            return res.status(401).json({
                errors: ["Usuário inválido"],
            })
        }

        req.userId = id;
        req.userEmail = email;
        return next()
    }catch(e){
        return res.status(401).json({
            errors: ["Token expirado ou inválido"],
        })
    }

}
