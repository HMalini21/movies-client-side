import React, { useState } from 'react';
import './VideoThumbnail.css';
import ReactPlayer from 'react-player';

const VideoThumbnail = ({ imageSrc, videoSrc, altText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="thumbnail-container"
      style={{
        width: isHovered ? '300px' : '150px',
        height: isHovered ? '150px' : '220px',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ReactPlayer
          url={videoSrc}
          playing
          loop
          muted
          className="thumbnail-video"
          width="300px"
          height="150px"
        />
      ) : (
        <img src={imageSrc} alt={altText} width="150px" height="220px" />
      )}

      {/* <img
        src={imageSrc}
        alt={altText}
        className={`thumbnail-image ${isHovered ? 'thumbnail-image-hovered' : ''}`}
      />
      {isHovered && <ReactPlayer url={videoSrc} playing loop muted className="thumbnail-video" />} */}
    </div>
  );
  s;
};

export default VideoThumbnail;
