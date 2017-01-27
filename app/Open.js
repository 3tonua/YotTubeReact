import React from 'react';
import Youtube from 'react-youtube';

class Open extends React.Component{
    componentDidMount(){
        console.log(this.props.params.id)
    }
    render() {
        return(
            <div>
                <Youtube videoId={this.props.params.id} />
            </div>
        )
    }
}

export default Open;