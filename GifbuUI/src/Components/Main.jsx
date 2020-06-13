import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles,createMuiTheme } from '@material-ui/core/styles';
import GifList from './GifList';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';

const theme = createMuiTheme();
const useStyles = {
    lvl1:{
        display: "flex",
        
    },
    lvl2:{
        flexGrow: "1",
        maxWidth: "100%",
        overflowX: "hidden"
    },
    lvl3:{
        display: "flex",
        overflow: "hidden",
        transition: "transform 195ms",
        minHeight: "95vh",
        //alignItems:"center"
    },
    paper:{       
        margin : "50px", 
        width: "275px",
        height: "425px",
        position: "absolute",
        left: "35%",
        top: "35%",
        transform: "translate(-35%, -35%)",
    },
    gifImage:{
        width: "275px",
        height: "425px",
    },
    fab: {
        position: "absolute",
        top: "90%",
        left:"85%"
    },
};

export class Main extends Component {
    constructor(props){
        super(props);

        this.state={
            open:false,
            messageText : "",
            selectedImg : null
        }
    }

    giftListCloseHandle = (img) =>{
        this.setState({open:false,selectedImg:img});
    }
    giftListOpenHandle=()=>{
        this.setState({open:true});
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.lvl1}>
                <div className={classes.lvl2}>                       
                    <div className={classes.lvl3}>  
                        <Container maxWidth="md">
                            <TextField
                                id="filled-full-width"
                                label="Gönderilecek Mesaj"
                                style={{ margin: 8 }}
                                placeholder="Göndermek istediğin mesajı buraya gir"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                variant="filled"
                                InputProps={{
                                    endAdornment: 
                                    <InputAdornment position="end">
                                        <IconButton onClick={this.giftListOpenHandle}>                                
                                            <AttachFileIcon /> 
                                        </IconButton>
                                    </InputAdornment>,
                                  }}                                
                                onChange={this.changeActionName}
                                value={this.state.messageText}                        
                            />    
                            <Paper className={classes.paper} elevation={3}>             
                                <img className={classes.gifImage} src={this.props.SelectedGifImage} />
                                <Fab className={classes.fab} color="primary" aria-label="add">
                                    <DoneIcon />
                                </Fab>                                
                            </Paper>
                            <GifList gifListOpen={this.state.open} close={this.giftListCloseHandle}></GifList>

                        </Container>
                    </div>
                </div>          
            </div>              
        )
    }
}

const mapStateToProps = (state)=>{
    return { SelectedGifImage: state.SelectedGifImage };
};

const mapDispatchToProps = {
    
}

const MainComponent = withStyles(useStyles)(Main);
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent) ;
