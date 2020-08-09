// // route/api/profile.js
// const express = require( 'express' );
// const aws = require( 'aws-sdk' );
// const multerS3 = require( 'multer-s3' );
// const multer = require('multer');
// const path = require( 'path' );
// const url = require('url');
// /**
//  * express.Router() creates modular, mountable route handlers
//  * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
//  */
// const router = express.Router();
// /**
//  * PROFILE IMAGE STORING STARTS
//  */
// const s3 = new aws.S3({
//  accessKeyId: '',
//  secretAccessKey: '',
//  Bucket: 'onclick'
// });
// /*
//  * Single Upload
//  */
// const profileImgUpload = multer({
//  storage: multerS3({
//   s3: s3,
//   bucket: 'onclick',
//   acl: 'public-read',
//   key: function (req, file, cb) {
//    cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
//   }
//  }),
//  limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
//  fileFilter: function( req, file, cb ){
//   checkFileType( file, cb );
//  }
// }).single('profileImage');
// /**
//  * Check File Type
//  * @param file
//  * @param cb
//  * @return {*}
//  */
// function checkFileType( file, cb ){
//  // Allowed ext
//  const filetypes = /jpeg|jpg|png|gif/;
//  // Check ext
//  const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
//  // Check mime
//  const mimetype = filetypes.test( file.mimetype );
// if( mimetype && extname ){
//   return cb( null, true );
//  } else {
//   cb( 'Error: Images Only!' );
//  }
// }
// /**
//  * @route POST api/profile/business-img-upload
//  * @desc Upload post image
//  * @access public
//  */
// router.post( '/profile-img-upload', ( req, res ) => {
// profileImgUpload( req, res, ( error ) => {
//   console.log( 'requestOkokok', req.file );
//   console.log( 'error', error );
//   if( error ){
//    console.log( 'errors', error );
//    res.json( { error: error } );
//   } else {
//    // If File not found
//    if( req.file === undefined ){
//     console.log( 'Error: No File Selected!' );
//     res.json( 'Error: No File Selected' );
//    } else {
//     // If Success
//     const imageName = req.file.key;
//     const imageLocation = req.file.location;
// // Save the file name into database into profile model
// res.json( {
//      image: imageName,
//      location: imageLocation
//     } );
//    }
//   }
//  });
// });
// // End of single profile upload
// /**
//  * BUSINESS GALLERY IMAGES
//  * MULTIPLE FILE UPLOADS
//  */
// // Multiple File Uploads ( max 4 )
// const uploadsBusinessGallery = multer({
//  storage: multerS3({
//   s3: s3,
//   bucket: 'onclick',
//   acl: 'public-read',
//   key: function (req, file, cb) {
//    cb( null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
//   }
//  }),
//  limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
//  fileFilter: function( req, file, cb ){
//   checkFileType( file, cb );
//  }
// }).array( 'galleryImage', 4 );
// /**
//  * @route POST /api/profile/business-gallery-upload
//  * @desc Upload business Gallery images
//  * @access public
//  */
// router.post('/multiple-file-upload', ( req, res ) => {
// uploadsBusinessGallery( req, res, ( error ) => {
//   console.log( 'files', req.files );
//   if( error ){
//    console.log( 'errors', error );
//    res.json( { error: error } );
//   } else {
//    // If File not found
//    if( req.files === undefined ){
//     console.log( 'Error: No File Selected!' );
//     res.json( 'Error: No File Selected' );
//    } else {
//     // If Success
//     let fileArray = req.files,
//      fileLocation;
// const galleryImgLocationArray = [];
//     for ( let i = 0; i < fileArray.length; i++ ) {
//      fileLocation = fileArray[ i ].location;
//      console.log( 'filenm', fileLocation );
//      galleryImgLocationArray.push( fileLocation )
//     }
//     // Save the file name into database
// res.json( {
//      filesArray: fileArray,
//      locationArray: galleryImgLocationArray
//     } );
//    }
//   }
//  });
// });
// // We export the router so that the server.js file can pick it up
// module.exports = router;


const express = require ('express');
const multer = require ('multer');
const AWS = require ('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const app = express();
const router = express.Router();


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey:process.env.AWS_SECRET_KEY
})

const storage =multer.memoryStorage({
    destinatation: function  (req, file, callback) {
        callback(null,'')
    }
})
//key value to upload file the image is the key
const upload = multer({storage}).single('image')

router.post('/upload', upload,(req,res) => {

    let myFile = req.file.originalname.split(".")

    console.log(myFile)
    //whatver the file is called, we remove past the . 
    const fileType = myFile[myFile.length -1] 
    console.log("hi")
    
    console.log(req.file);
    // if (err) {
    //   next(err) // Pass errors to Express.
    // } else {
    //   res.send(data)
    // }

const params ={
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: req.file.buffer,
    Region: process.env.AWS_REGION 
}

s3.upload(params, (error, data) => {
    if(error){
        res.status(500);
    }
    console.log(error)
    res.status(200).send(data);
    console.log("success!")
    console.log(data)
    console.log(process.env)
    AWS.config.credentials  = new AWS.CognitoIdentityCredentials({});
AWS.config.region = 'us-west-1';
 
AWS.config.credentials.get(function(err) {
  if (err) console.log(err);
  else console.log(AWS.config.credentials);
});
})
})

module.exports = router;


