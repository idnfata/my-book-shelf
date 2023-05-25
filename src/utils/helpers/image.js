import Resizer from "react-image-file-resizer";

export const resizeImage = (
  file,
  maxWidth = 800,
  maxHeight = 800,
  format = "JPG",
  quality = 85
) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      format,
      quality,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });