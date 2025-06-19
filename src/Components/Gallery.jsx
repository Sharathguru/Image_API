// import React, { useEffect, useState } from "react";
// import { useGlobalContext } from "../Context";
// import axios from "axios";

// const Gallery = () => {
//   let { search } = useGlobalContext(); // Get search value from Context
//   let [data, setData] = useState([]);

//   let fetchImage = async () => {
//     let res = await axios.get(
//       `https://api.unsplash.com/search/photos?client_id=xXv3MzddzBJN12074wvnBz-Qmt2-4QeqcktQL9iZSbg&query=${search}`
//     );
//     setData(res.data.results);
//   };

//   useEffect(() => {
//     fetchImage();
//   }, [search]); // Fetch new images when search updates

//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>Gallery</h1>
//       <div className="image-container">
//         {data.map((img, index) => (
//           <img key={index} src={img.urls.small} alt="" height="250px" width="250px" style={{ margin: "20px" }} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../Context';
import axios from 'axios';
const Gallery = () => {
  let { search } = useGlobalContext();
  let [data, setData] = useState([]);
  console.log(search); // ✅ Log search value
  let fetchImages = async () => {
    try {
      let res = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=xXv3MzddzBJN12074wvnBz-Qmt2-4QeqcktQL9iZSbg&query=${search}`
      );
      setData(res.data.results); // ✅ Store only results array
      console.log(res.data.results); // ✅ Log API response data
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImages(); // ✅ Fetch images on mount
  });
  console.log(data); // ❌ Won't log updated state immediately, as state updates asynchronously.
  return (
    <div id='img'>
      {data.map((img) => (
        <img key={img.id} src={img.urls.raw} alt="Gallery Image" width={340} height={300} />
      ))}
    </div>
  );
};

export default Gallery;
