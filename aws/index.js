require ('dotenv/config');
const express = require ('express');
const app = express();
const port = 3000;
const multer = require ('multer');
const AWS = require ('aws-sdk');
const uuid = require("uuid ");


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey:process.env.AWS_SECRET
})

const storage =multer.memoryStorage({
    destinatation: function  (req, file, callback) {
        callback(null,'')
    }
})
//key value to upload file the image is the key
const upload = multer({storage}).single('image')

app.post('/upload', upload,(req,res) => {

    let myFile = req.file.originalname.split(".")
    //whatver the file is called, we remove past the . 
    const fileType = myFile[myFile.length -1] 
    
    console.log(req.file);
    res.send({
        message: "hello world"
    })
})
const params ={
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuid()}.${fileType}`,
    Body: req.file.buffer 
}

s3.upload(params, (error, data) => {
    if(error){
        res.status(500).send(error)
    }

    res.status(200).send(data);
})
app.listen(port, () => {
    console.log(`server is listening at ${port}`)
})