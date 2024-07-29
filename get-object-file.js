require("dotenv").config();

const Minio = require("minio");

// Instantiate the MinIO client with the object store service
// endpoint and an authorized user's credentials
const minioClient = new Minio.Client({
  endPoint: process.env.S3_MINIO_ENDPOINT,
  port: parseInt(process.env.S3_MINIO_PORT, 10),
  useSSL: process.env.S3_MINIO_SSL.toLowerCase() === "true",
  accessKey: process.env.S3_MINIO_ACCESS_KEY,
  secretKey: process.env.S3_MINIO_SECRET_KEY,
});

// File to upload
const sourceFile = "./test.txt";

// Destination bucket
const bucket = "demo-app";

// Destination object name
const destinationObject = "demo-app-dir";

// Check if the bucket exists
// If it doesn't, create it
async function downloadFile() {
  try {
    await minioClient.fGetObject(bucket, destinationObject, "./get-data.txt");
    console.log("success");
  } catch (error) {
    console.log("Error occurred: ", error);
  }
}

downloadFile();
