import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
const ImageBox = ({ src, caption }) => {
  return (
    <figure style={{ textAlign: "center" }}>
      <img src={useBaseUrl(`/img/graphs/${src}`)} alt={caption} />
      <figcaption style={{ marginBottom: "20px" }}>{caption}</figcaption>
    </figure>
  );
};

export default ImageBox;
