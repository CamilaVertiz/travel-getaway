
import React from 'react';
import YouTube from 'react-youtube';

const EmbedVideo = ({ videoId }) => {
    const videoOptions = {        
        width: "100%",
        height: "100%",
        playerVars: {            
            autoplay: 1,
            controls: 0,
            mute: 1,
            rel: 0,
            showinfo: 0,
            loop: 1,
            start: 50,
        },
      };

    return (
        <div className="video-background">
            <div className="video-foreground">
            <YouTube
                videoId={videoId}
                opts={videoOptions}
                className="video-iframe"
            />
            </div>
        </div>
  );
}

export default EmbedVideo;
       