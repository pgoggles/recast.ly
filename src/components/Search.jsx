import searchYouTube from '../lib/searchYouTube.js';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: undefined};
  }
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleSearch.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={this.searchForVideo.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

  handleSearch (event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  searchForVideo () {
    searchYouTube(this.state.searchTerm, this.props.parseVideoData);
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
