
import React from 'react';
import YouTube from 'react-youtube';

const Audio = ({ audioId }) => {
    const audioOptions = {        
        width: "10px",
        height: "10px",
        playerVars: {            
            autoplay: 1,
            controls: 0,
            mute: 0,
            rel: 0,
            showinfo: 0,
            loop: 1,
        },
      };

    return (
        <div className="background-music">
            <YouTube
                videoId={audioId}
                opts={audioOptions}
                className="video-iframe"
            />
        </div>
  );
}

export default Audio;
       