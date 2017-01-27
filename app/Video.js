import React from 'react';
import Youtube from 'react-youtube';
import LinearProgress from 'material-ui/LinearProgress';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';

const flexBox = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexFlow: 'row wrap'
};
const style = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    height: 400,
    width: 450,
    margin: 5,
    textAlign: 'center',
    display: 'block',
    position: 'relative',
    padding: 15
};
const btnStyle = {
    marginTop: 0,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    position: 'relative',
    bottom: 12,
    top: 12
};
const modal = {
    margin: 0
};

class Video extends React.Component {
    goToOpen(){
        this.props.router.push('/open/openvideo')
    }
    constructor() {
        super();
        this.state = {
            load: true
        }
    }
    getOnReady() {
        this.setState({
            load: false
        })
    };

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];
        return(
        <div>
            <div>
                <Card style={style}>
                    <CardMedia>
                        <Link to={"/"}>
                        <img src={this.props.jpgUrl} alt={this.props.title}/>
                        </Link>
                    </CardMedia>
                    <CardTitle title={this.props.title} subtitle={this.props.channelTitle} />
                    <CardActions>
                        <Link to={"/open/" + this.props.videoId}>
                            <FlatButton label="Open" />
                        </Link>
                        <Link to={"/"}>
                            <FlatButton label="Modal" onTouchTap={this.handleOpen} onClick={this.goToOpen.bind(this)}/>
                            <Dialog style={modal}
                                    title={this.props.title}
                                    actions={actions}
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleClose}>
                                <div>
                                    <Youtube videoId={this.props.videoId} />
                                </div>
                            </Dialog>
                        </Link>
                    </CardActions>
                </Card>
            {/*<Paper style={style} zDepth={2}>
                <h3>{this.props.title}</h3>
                <p>{this.props.channelTitle}</p>
                <img src={this.props.jpgUrl} alt=""/>
                /!*<Youtube videoId={this.props.videoId}
                     onReady={this.getOnReady.bind(this)}
                     opts={opts}/>*!/
                <div style={btnStyle}>
                    <RaisedButton  label="Watch" fullWidth={true} primary={true} />
                </div>
            </Paper>*/}

            </div>
        </div>
        )
    }
    }
export default Video;