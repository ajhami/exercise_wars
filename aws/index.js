
// const express = require ('express');
// const multer = require ('multer');
// const AWS = require ('aws-sdk');
// const { v4: uuidv4 } = require('uuid');

// const app = express();


// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ID,
//     secretAccessKey:process.env.AWS_SECRET_KEY
// })

// const storage =multer.memoryStorage({
//     destinatation: function  (req, file, callback) {
//         callback(null,'')
//     }
// })
// //key value to upload file the image is the key
// const upload = multer({storage}).single('image')

// app.post('/upload', upload,(req,res) => {

//     let myFile = req.file.originalname.split(".")
//     //whatver the file is called, we remove past the . 
//     const fileType = myFile[myFile.length -1] 
//     console.log("hi")
    
//     console.log(req.file);


// const params ={
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: `${uuidv4()}.${fileType}`,
//     Body: req.file.buffer 
// }

// s3.upload(params, (error, data) => {
//     if(error){
//         res.status(500);
//     }

//     res.status(200).send(data);
//     console.log("success!")
// })
// })