const express = require("express");
const listingRoutes = require("./source/listings/routes");
const authRoutes = require("./source/auth/routes");
const otherRoutes = require("./source/other/routes");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Use absolute path
    const uploadDir =
      "C:\\Users\\Milka\\Downloads\\pern-boilerplate-main\\back\\source\\uploads";

    // Check if directory exists and create if it doesn't
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true }); // Use recursive: true to ensure parent directories are created
    }

    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded." });
  }

  const filePath = path.join(
    "C:\\Users\\Milka\\Downloads\\pern-boilerplate-main\\back\\source\\uploads",
    req.file.filename
  );
  return res.status(200).send({
    message: "File uploaded successfully.",
    fileLocation: filePath,
  });
};

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/api/v1/image", upload.single("file"), uploadImage);

app.use("/api/v1/listings", listingRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/", otherRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
