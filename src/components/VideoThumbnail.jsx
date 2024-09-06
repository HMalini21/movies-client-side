import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoThumbnail = ({ imageSrc, videoSrc, altText, summary }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: isHovered ? '305px' : '150px',
        height: isHovered ? '150px' : '220px',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: ' transform 0.3s ease  box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          <ReactPlayer
            url={videoSrc}
            playing
            loop
            muted
            className="thumbnail-video"
            width="300px"
            height="150px"
          />
          <p style={{ paddingTop: '30px', paddingLeft: '20px', fontSize: '10px' }}>{summary}</p>
        </>
      ) : (
        <>
          <img src={imageSrc} alt={altText} width="150px" height="220px" />
        </>
      )}
    </div>
  );
  s;
};

export default VideoThumbnail;
