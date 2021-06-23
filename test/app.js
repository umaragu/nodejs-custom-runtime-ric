

/**
 * This is the portion of the lifecycle hook that is
 * implemented by customers. In this case we are creating
 * a blocking call to a sleep method for 5 seconds.
 * 
 * If you run this example in your terminal you can see the
 * that await is honored, the function blocks, and then 
 * wakes up prior to invocation.
 */
let s3File;
exports.initGlobals = async () => {
  consol.log("******** enter initializeFunction hook ********");
  s3File = await getS3File();
  console.log("******** File Fetched    ********");
}

exports.handler = async (event, context) => {
    console.log("******** enter the handler        ********");
    console.log("******** Is promised resolved? " + s3File + " ********");
    return 'Function complete.';
}
const AWS = require('aws-sdk')
const s3 = new AWS.S3();

async function getS3File() {
	console.log("getting file from s3")
	return await s3.getObject({ Bucket: 'airflow-us-west-2-private', Key: 'requirements.txt' }).promise();
}