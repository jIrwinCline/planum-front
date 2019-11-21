import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

//MUI Stuff
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import CircularProgress from '@material-ui/core/CircularProgress';
//REDUX
import { connect } from "react-redux";
import { postProduct } from "../redux/actions/dataActions";

class PostProduct extends Component {
    state = {
        open: false,
        bpdy: '',
        errors: {}
    };
}

PostProduct.propTypes = {
    postProduct: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps, { postProduct })(withStyles(styles)(postProduct))