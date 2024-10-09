import { Request } from "express";
import multer, { diskStorage, FileFilterCallback } from "multer";

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop()?.toLowerCase();
    const timestamp = new Date().getTime();
    cb(null, `${timestamp}.${ext}`);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  const isValid = file.mimetype.startsWith("application/pdf");
  cb(null, isValid);
};

const upload = multer({ storage, fileFilter: fileFilter });

export default upload;
