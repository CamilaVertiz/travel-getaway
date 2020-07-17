import React, { useState } from "react";
import EmbedVideo from './components/EmbedVideo';
import Audio from './components/Audio';
import Controls from './components/Controls';
import Copyright from './components/Copyright';
import './App.css';


const App = () => {
  const [videoId, setVideoId] = useState('-7QaGtE6q70'); 
  const [audioId, setAudioId] = useState('jZpeH_UfNiQ'); 
  
  return (
    <div className="App">
         <Controls updateVideo={setVideoId} updateAudio={setAudioId} />         
         <Audio audioId={audioId} />                  
         <Copyright />
         <EmbedVideo videoId={videoId} />
    </div>
  );
}

export default App;