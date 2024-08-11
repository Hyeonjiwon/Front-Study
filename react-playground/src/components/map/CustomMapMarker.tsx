import React from "react";
import markerIcon from "../../assets/icon/markerIcon.svg"; // 이미지 import

const CustomMapMarker = ({
  title,
  windowWidth,
}: {
  title: string;
  windowWidth: number;
}) => {
  const mobileContentArray = [
    `<div style="margin: 0; display: table; padding: 0.5rem; table-layout: auto; border-radius: 2.3rem; border: 0.15rem solid #9ABCFF; background: #224A99; cursor: pointer; position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;">
       <div style="width: 28px; height: 28px; background-image: url(${markerIcon}); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
     </div>`,
  ];

  const contentArray = [
    `<div style="margin: 0; display: table; padding: 0.3rem; table-layout: auto; border-radius: 0.5rem; border: 0.15rem solid #9ABCFF; background: #224A99; cursor: pointer; position: relative; z-index: 2">
       <div style="max-width: 10rem; height: 2rem; padding: 0 0.8rem 0 0.8rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: table-cell; vertical-align: middle; cursor: pointer; font-size: 1rem; color: white; letter-spacing: -0.04rem; font-weight: 600; line-height: 2rem;">
         ${title}
       </div>
       <span style="position: absolute; border-style: solid; border-width: 0.6rem 0.6rem 0 0.6rem; border-color: #224A99 transparent transparent transparent; display: block; width: 0; z-index: 1; bottom: -0.6rem; left: 1.4rem;"></span>
       <span style="position: absolute; border-style: solid; border-width: 0.8rem 0.8rem 0 0.8rem; border-color: #9ABCFF transparent transparent transparent; display: block; width: 0; z-index: 0; bottom: -0.8rem; left: 1.23rem;"></span>
     </div>`,
  ];

  if (windowWidth < 768) return mobileContentArray.join("");

  return contentArray.join("");
};

export default CustomMapMarker;

// <div style="width: 32px; height: 32px; background-image: url(${markerIcon}); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
