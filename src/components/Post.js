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
        display: 'flex',
        marginBottom: 20,
    },
    image: {
      minWidth: 200,
    },
    content: {
      padding: 25,
      objextFit: 'cover'
    }
}

export class Post extends Component {
    render() {
        const { classes, post : { name, createdAt, images, itemCategory, postId, link, info, price, available, highEnd } } = this.props
        return (
          <a href={link}>
            <Card className={classes.card}>
              <CardMedia image={images} title="Product Image" className={classes.image}/>
              <CardContent class={classes.content}>
                <Typography variant="h5" color="primary">{name}</Typography>
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
