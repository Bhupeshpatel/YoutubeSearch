import React from 'react';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import _ from 'lodash';

const API_KEY = 'Your you tube key';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('surfboards');
    }


    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) } , 300);

        return(
            <div className="container">
                <div className="row">
                    <SearchBar onSearchTermChange={videoSearch}/>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos}/>
                </div>
            </div>
        )
    }
}