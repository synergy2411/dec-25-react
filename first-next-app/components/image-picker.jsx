"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ name }) {
  const fileInputRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  const imagePickHandler = () => {
    fileInputRef.current.click();
  };

  const imageChangeHandler = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function () {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };
  return (
    <>
      <input
        type="file"
        accept="image/jpeg, image/png"
        name={name}
        hidden
        ref={fileInputRef}
        onChange={imageChangeHandler}
      />
      <div className="row">
        <div className="col-2">
          <button
            type="button"
            className="btn btn-sm btn-secondary"
            onClick={imagePickHandler}
          >
            Pick Image
          </button>
        </div>
        <div className="col-8">
          <div className={classes["image-preview"]}>
            {!pickedImage && (
              <p className="text-center">No image preview yet</p>
            )}
            {pickedImage && (
              <Image
                fill
                src={pickedImage}
                alt="The image picked by the user"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImagePicker;
