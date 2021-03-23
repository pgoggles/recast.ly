import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentVideo: exampleVideoData[0]};
  }
  render() {
    if (JSON.stringify(this.props) !== JSON.stringify({})) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> <Search /> </h5></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo}/> </h5></div>
            </div>
            <div className="col-md-5">
              <div><h5><em>videoList</em> <VideoList videos={this.props.videoData} onListItemClick={this.onListItemClick.bind(this)}/> </h5></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> <Search /> </h5></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo}/> </h5></div>
            </div>
            <div className="col-md-5">
              <div><h5><em>videoList</em> <VideoList videos={exampleVideoData} onListItemClick={this.onListItemClick.bind(this)}/> </h5></div>
            </div>
          </div>
        </div>
      );
    }

  }
  onListItemClick (video) {
    this.setState({currentVideo: video});
  }

}

export default App;
