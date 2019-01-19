import React,{Component} from 'react'
import {Fab,Avatar} from '@material-ui/core'
import {pink} from '@material-ui/core/colors'
import {connect} from 'react-redux'
import {displayText} from '../Store/ActionsCreators'

class DrumButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            audio: null
        }
    }

    playSound = () => {
        const {sendTextToDisplay,drumSound} = this.props
        this.state.audio.play()
        sendTextToDisplay(drumSound.name)

    }

    componentDidMount(){
        const {letter} = this.props
        this.setState({
            audio: document.querySelector(`#${letter}`)
        })
    }

    componentDidUpdate(){
        const {keyCode,letterCode,drumSound,sendTextToDisplay} = this.props
        if(keyCode === letterCode){
            this.playSound()
            sendTextToDisplay(drumSound.name)
        }
    }

    render(){
        const {letter,drumSound} = this.props
        return (
            <Fab color='secondary' onClick={this.playSound}>
                <Avatar style={{backgroundColor:pink.A400}}>{letter}</Avatar>
                <audio src={drumSound.sound} id={letter}></audio>
            </Fab>
        )
    }
}

const mapStateToProps = state => {
    return  {
        keyCode: state.keyCode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendTextToDisplay(text){
            dispatch(displayText(text))
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(DrumButton)