import jwt from 'jsonwebtoken'

export default (req, res, next) =>{
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
        req.userId = id;
        req.userEmail = email;
        return next()
    }catch(e){
        return res.status(401).json({
            errors: ["Token expirado ou inválido"],
        })
    }

}
