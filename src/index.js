// React -> manage components
// ReactDOM -> render component
import React, {Component} from 'react'; // 'react' is literally the node_module name
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// const API_KEY = 'AIzaSyDdMP5aynBKWjaqHiDZJlDU7jGMdEJvWwU';
const API_KEY = "AIzaSyA4O2v7iQaUc5nZePhqYwPk9Zmea8b87BI";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [],
                   selectedVideo: null,
                  loader:false};

    // this.videoSearch('salman')
  }

  videoSearch(term) {
    console.log("hehehe");
    this.setState({loader:true});
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log("hehehe2",videos[0]);
      this.setState({videos: videos,
                     selectedVideo: videos[0],
                     loader:false});
      // Some ES6 syntactic sugar = key and property
      // have the same name ---> this.setState({videos})
    });
  }

  render() {

    // Make a new function that can only be called once every 300 miliseconds
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        
        {this.state.loader ? (
        <div>
          loading
        </div>) : (
        <div>
            {this.state.videos.length > 0 ? (
              <div>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} />
              </div>
            ) : (
              <div className="col-md-8">please search something</div>
            )}
        </div>
        )}
      
    </div>
    );
  }
}

// Create a new component. This component should produce
// some HTML
// This is a factory that produceses instances (functional component, no state)
// const App = () => { // now we have fat arrows, the only difference of
  // function() {} to this new method, is the parameter "this"

  // JS that produces HTML
  //return (
  //  <div>
  //    <SearchBar />
  //  </div>
  //); // This look alike HTML inside JS is JSX (webpack and babel comes to play)

  // This gets transpiled to vanilla JS (ES5)
  // App = function App() {
  //  return React.createElement("div", null, "Hi!"); --> it creates the instance
  // }
//}

// Take this component's generated HTML and put it
// on the page (in the DOM)
// React.createElement(_temporalAssertDefined(App, ""....)
// We are making an instance of an App (self closing tag) and selecting a target
// DOM node (container - check index.html)
ReactDOM.render(<App />, document.querySelector('.container'));
