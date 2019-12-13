import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div className="offset-md-5 col-md-2">
          Loading...
      </div>
  }

  const videoId = video.id.videoId;
  // String interpolation, or template strings - ES6
  // You gotta use backtick, instead of quotation marks
  // const url = 'https://www.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-10 offset-md-1">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen="allowFullScreen" frameBorder="0"></iframe>
      </div>
      <div className="details">
        <div className="video-title one-liner" title={video.snippet.title}>{video.snippet.title}</div>
        <div className="main-video-desc" title={video.snippet.description}>{video.snippet.description}</div>
      </div>
    </div>
  );
};


export default VideoDetail;
