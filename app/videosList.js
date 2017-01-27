import React from 'react';
import Video from './Video';
import API from './api';

/*let style = {
    width: "400px",
    height: "350px",
    margin: "10px",
    borderRadius: "5px",
    display: "inline-block",
    padding: "10px"
};*/
const flexBox = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    position: 'relative'
};
class videosList extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: []
        }
    }
    componentDidMount() {
        API.getVideos().then((data) => {
            console.log(data);
            this.setState({
                videos: data
            })
        })
    }
    render() {
        return <div style={flexBox}>{
            this.state.videos.map((video) => {
                return <div key={video.id}>{
                    <Video jpgUrl={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    videoId={video.id}
                    channelTitle={video.snippet.channelTitle}
                    />
                }</div>
            })
    }</div>
    }
}
export default videosList;