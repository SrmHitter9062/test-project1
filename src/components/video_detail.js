import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading1...</div>;
  }

  const videoId = video.id.videoId;
  // String interpolation, or template strings - ES6
  // You gotta use backtick, instead of quotation marks
  // const url = 'https://www.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-10 offset-md-1">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};


export default VideoDetail;
