import multer from "multer";
import { extname, resolve } from "path";//Extname pega a extensão do arquivo

const randow = () => Math.floor(Math.random() * 10000 + 10000);

export default{
    fileFilter: (req, file, callback) => {
        if (file.mimetype !== "image/png" && file.mimetype !== "image/jpg" && file.mimetype !== "image/jpeg") {
            return callback(new multer.MulterError("Arquivo precisar ser PNG, JPG ou JPEG"));
        }

            return callback(null, true);
        },

    storage: multer.diskStorage({
        
        destination: (req, file, callback) => {
            callback(null, resolve(__dirname, "..", "..", "uploads", "images"));//Primeiro parâmetro seria o erro, segundo seria a pasta de destino
        },

        filename: (req, file, callback) => {
            callback(null, `${Date.now()}_${randow()}${extname(file.originalname)}`);//Primeiro parâmetro seria o erro, segundo seria o nome do arquivo e o extname passa a extensão do arquivo
        },
    }),
};