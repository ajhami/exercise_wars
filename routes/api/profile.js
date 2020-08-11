
const AWS_ID = process.env.herokuAWSID || require("../config").AWS_ID;
const AWS_SECRET_KEY = process.env.herokuAWSSECRETKEY || require("../config").AWS_SECRET_KEY;
const AWS_BUCKET_NAME = process.env.herokuAWSBUCKETNAME || require("../config").AWS_BUCKET_NAME;
const express = require( 'express' );
  const aws = require( 'aws-sdk' );
  const multerS3 = require( 'multer-s3' );
  const multer = require('multer');
  const path = require( 'path' );
  
  const router = express.Router();
  
  
  //  console.log(config.AWS_BUCKET_NAME)

  const s3 = new aws.S3({
    accessKeyId: AWS_ID,
    secretAccessKey: AWS_SECRET_KEY,
    Bucket: AWS_BUCKET_NAME
  });
  
  const profileImgUpload = multer({
    storage: multerS3({
      s3: s3,
      bucket: AWS_BUCKET_NAME,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      key: function (req, file, cb) {
        cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
      }
    }),
    limits:{ fileSize: 200000000 }, // In bytes: 200000000 bytes = 200 MB
  
  }).single('profileImage');
  
  router.post( '/profile-img-upload', ( req, res ) => {
    profileImgUpload( req, res, ( error ) => {
      console.log( 'requestOkokok', req.file );
      console.log( 'error', error );
      if( error ){
        console.log( 'errors', error );
        res.json( { error: error } );
      } else {
        // If File not found
        if( req.file === undefined ){
          console.log( 'Error: No File Selected!' );
          res.json( 'Error: No File Selected' );
        } else {
          // If Success
          const imageName = req.file.key;
          const imageLocation = req.file.location;
  // Save the file name into database into profile model
          res.json( {
            image: imageName,
            location: imageLocation
          } );
        }
      }
    });
  });
  
  
  module.exports = router;