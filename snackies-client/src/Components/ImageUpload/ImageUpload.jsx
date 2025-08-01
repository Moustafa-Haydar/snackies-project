import React, { useState } from "react";
import "./style.css";
import Button from "../Button/Button";
import axios from "axios";

const ImageUpload = () => {
  const [base64, set64] = useState();

  const uploadImage = () => {
    console.log("uploading image");
    console.log(base64);
  };

  const convert64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");

      set64(base64String);
    };

    set64(reader.readAsDataURL(file));
  };

  return (
    <div>
      <input onChange={(e) => convert64(e.target.files[0])} type="file"></input>

      <Button btn_name={"Upload Image"} onClick={uploadImage} />
    </div>
  );
};

export default ImageUpload;
