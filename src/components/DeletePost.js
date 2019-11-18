import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

//MUI Stuff
import Button from '@material-ui/core/Button'
import Dialog from "@material-ui/core/Dialog";
import DiologTitle from "@material-ui/core/DiologTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DeleteOutline from '@material-ui/icons/DeleteOutline';

import {connect } from 'react-redux';
import { deletePost } from '../redux/actions/dataActions';

class DeletePost extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default DeletePost
