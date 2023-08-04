import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
const ImageBox = ({ src, caption }) => {
  return (
    <figure>
      <img src={useBaseUrl(src)} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default ImageBox;
