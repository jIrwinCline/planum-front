import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";
import { Link } from 'react-router-dom';
//MUI Stuff
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from '@material-ui/core/grid';
import Typography from '@material-ui/core/Typography'
//ICONS
import CloseIcon from "@material-ui/icons/Close";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import AppIcon from "../images/planumIcon.png";
//REDUX
import { connect } from 'react-redux'
import { getPost } from '../redux/actions/dataActions';

const styles = {
  invisibleSeperator: {
    border: "none",
    margin: 4
  },
  image: {
    margin: "20px auto 20px auto",
    width: "50px"
  },
  form: {
    textAlign: "center"
  },
  image: {
    margin: "20px auto 20px auto",
    width: "50px"
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20,
    postition: "relative"
  },
  customError: {
    color: "red",
    fontSixe: "0.8rem",
    marginTop: 10
  },
  progress: {
    position: "absolute"
  },
  submitButton: {
    position: "relative",
    float: "right",
    marginTop: 10
  },
  progressSpinner: {
    position: "absolute"
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    top: "6%"
  }
};

class PostDialog extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
    this.props.getPost(this.props.postId);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render(){
      const { classes, post: { postId, name, images, itemCategory, link, info, price, available, highend }, UI: { loading }} = this.props;

    const dialogMarkup = loading ? (
        <CircularProgress size={200}/>
    ) : ( <Grid container spacing={16}>
            <Grid item sm={5}>
                <img src={AppIcon} alt='Profile' className={classes.image}/>
            </Grid>
            <Grid item sm={7}>
                <Typography
                component={Link}
                color="primary"
                variant="h5"
                to={link}
                >
                    Buy Item
                </Typography>
                <hr className={classes.invisibleSeperator}/>
            </Grid>
        </Grid>
    )
    return (
        <Fragment>
            <MyButton onClick={this.handleOpen} tip="Expand Post" tipClassName={classes.expandButton}>
                <UnfoldMore color="primary"/>
            </MyButton> 
            <Dialog open={this.state.open}
              onClose={this.handleClose}
              fullWidth
              maxWidth="sm"
            >
              <MyButton
                tip="close"
                onClick={this.handleClose}
                tipClassName={classes.closeButton}
              >
                <CloseIcon />
              </MyButton>
              <DialogContent className={classes.dialogContent}>
                {dialogMarkup}
              </DialogContent>
            </Dialog>
        </Fragment>
    )
  }
}

PostDialog.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.data.post,
    UI: state.UI
})

const mapActionsToProps = {
    getPost
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(PostDialog));