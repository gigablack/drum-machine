import React,{Component} from 'react'
import {Paper,Grid} from '@material-ui/core'
import DrumButton from './DrumButton.jsx'
import {
    drumSound1,
    drumSound2,
    drumSound3,
    drumSound4,
    drumSound5,
    drumSound6,
    drumSound7,
    drumSound8,
    drumSound9
} from '../Sounds/sounds'
import {connect} from 'react-redux'
import {playSound,cleanState} from '../Store/ActionsCreators'

const styles = {
    marginBottom: '5px'
}

class App extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const body = document.querySelector('body')
        const {playSoundDisptach,cleanStateDispatch} = this.props

        body.addEventListener('keydown',(e) => {
            cleanStateDispatch()
            playSoundDisptach(e.keyCode)
            console.log(typeof e.keyCode)
        })

    }

    render(){
        const {textToDisplay} = this.props
        return (
            <div>
                <Grid container justify='center' alignItems='center' style={{height:'90vh'}}>
                    <Grid item xs={4}>
                        <Paper>
                            <h1>Drum Machine</h1>
                            <Grid container id='drum-machine'>
                                <Grid item xs={6}>
                                    <Grid item xs={12} style={styles}>
                                        <Grid container justify='space-evenly'>
                                            <Grid item xs={3}>
                                                <DrumButton letter='Q' drumSound={drumSound1} letterCode={81} className='drum-pad'/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <DrumButton letter='W' drumSound={drumSound2} letterCode={87} className='drum-pad'/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <DrumButton letter='E' drumSound={drumSound3} letterCode={69} className='drum-pad'/>
                                            </Grid>
                                        </Grid>
                                        
                                        
                                        
                                    </Grid>
                                    <Grid item xs={12} style={styles}>
                                        <Grid container justify='space-evenly'>
                                            <Grid item xs={3}>
                                                <DrumButton letter='A' drumSound={drumSound4} letterCode={65} className='drum-pad'/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <DrumButton letter='S' drumSound={drumSound5} letterCode={83} className='drum-pad'/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <DrumButton letter='D' drumSound={drumSound6} letterCode={68} className='drum-pad'/>
                                            </Grid>
                                        </Grid>
                                        
                                        
                                        
                                    </Grid>
                                    <Grid item xs={12} style={styles}>
                                        <Grid container justify='space-evenly'>
                                            <Grid item xs={3}>
                                                <DrumButton letter='Z' drumSound={drumSound7} letterCode={90} className='drum-pad'/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <DrumButton letter='X' drumSound={drumSound8} letterCode={88} className='drum-pad'/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <DrumButton letter='C' drumSound={drumSound9} letterCode={67} className='drum-pad'/>
                                            </Grid>
                                        </Grid>
                                        
                                        
                                        
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper id='display' style={{textAlign:'center'}}>
                                        <h2>{textToDisplay}</h2>
                                    </Paper>
                                </Grid>
                            </Grid>
                            
                            
                            
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playSoundDisptach(keyCode){
            dispatch(playSound(keyCode))
        },
        cleanStateDispatch(){
            dispatch(cleanState())
        }
    }
}

const mapStateToProps = state => {
    return {
        textToDisplay: state.displayText
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(App)