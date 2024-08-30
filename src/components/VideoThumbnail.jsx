// import React, { useState } from 'react';
// import './VideoThumbnail.css';

// const VideoThumbnail = ({ imageSrc, videoSrc, altText }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div>
//       <div
//         className="thumbnail-container"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={{
//           position: 'relative',
//           width: '150px',
//           height: '220px',
//           borderRadius: '10px',
//           overflow: 'hidden',
//           transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//           transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//         }}
//       >
//         <img
//           src={imageSrc}
//           alt={altText}
//           style={{
//             width: '150px',
//             height: '220px',
//             objectFit: 'cover',
//             borderRadius: '10px',
//             filter: isHovered ? 'brightness(50%)' : 'brightness(100%)',
//             // transition: 'filter 0.3s ease',
//           }}
//         />
//         {isHovered && (
//           <video
//             src={videoSrc}
//             autoPlay
//             loop
//             muted
//             style={{
//               position: 'relative',
//               top: 0,
//               left: 0,
//               width: '300px',
//               height: '100%',
//               objectFit: 'cover',
//               borderRadius: '10px',
//               zIndex: 1,
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoThumbnail;

// // <iframe
// //   width="560"
// //   height="315"
// //   src="https://www.youtube.com/embed/ciziZk8mIyg?si=ShSFZPUldvpl9KyZ"
// //   title="YouTube video player"
// //   frameborder="0"
// //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //   referrerpolicy="strict-origin-when-cross-origin"
// //   allowfullscreen
// // ></iframe>

import React, { useState } from 'react';
import './VideoThumbnail.css';

const VideoThumbnail = ({ imageSrc, videoSrc, altText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="thumbnail-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt={altText}
        className={`thumbnail-image ${isHovered ? 'thumbnail-image-hovered' : ''}`}
      />
      {isHovered && <video src={videoSrc} autoPlay loop muted className="thumbnail-video" />}
    </div>
  );
};

export default VideoThumbnail;
