// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';
import searchYoutube from './lib/searchYouTube.js';

ReactDOM.render(<App videoData={exampleVideoData}/>, document.getElementById('app'));
