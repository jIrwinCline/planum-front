import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "react-router-dom";

//MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        display: 'flex'
    }
}

export class Post extends Component {
    render() {
        const { classes, post : { name, createdAt, images, itemCategory, postId, link, info, price, available, highEnd } } = this.props
        return (
          <a href={link}>
            <Card>
              <CardMedia image={images} title="Product Image" />
              <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ${price}
                </Typography>
                <Typography variant="body1">{info}</Typography>
              </CardContent>
            </Card>
          </a>
        );
    }
}

export default withStyles(styles)(Post)
