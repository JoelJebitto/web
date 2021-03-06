import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 100,
  },
  media: {
    height: 140,
  },
});

function Cards({
  title = "",
  description = "",
  githubUrl = "",
  websiteUrl = "",
}) {
  const classes = useStyles();

  return (
    <Card className="max-w-full">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {githubUrl && (
          <a href={githubUrl}>
            <Button size="small" color="primary">
              Go To GitHub
            </Button>
          </a>
        )}
        <a href={websiteUrl}>
          <Button size="small" color="primary">
            Go TO Website
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
export default Cards;
