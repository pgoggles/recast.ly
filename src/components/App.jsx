import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    if (JSON.stringify(props) !== JSON.stringify({})) {
      this.state = {currentVideo: props.videoData[0], videoData: props.videoData};
    } else {
      this.state = {currentVideo: exampleVideoData[0], videoData: exampleVideoData};
    }

  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search parseVideoData={this.parseVideoData.bind(this)}/> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo}/> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList videos={this.state.videoData} onListItemClick={this.onListItemClick.bind(this)}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }

  onListItemClick (video) {
    this.setState({currentVideo: video});
  }

  parseVideoData (data) {
    console.log(data);
    this.setState({videoData: data});
    this.setState({currentVideo: data[0]});
  }

}

export default App;
