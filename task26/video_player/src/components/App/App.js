import React from 'react';

import Video from '../Video/Video'; // Utilisez le chemin correct vers Video.js
import Menu from '../Menu/Menu'; //


const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);
    this.state = { src: VIDEOS.fast };
  }
  chooseVideo(newVideo) {
    // Set the state's src based on the selected video
    this.setState({ src: VIDEOS[newVideo] });
  }

  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu  chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}


export default App;