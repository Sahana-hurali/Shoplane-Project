import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./card.css";

const useStyles = makeStyles({
  root: {
        width: 190,
        marginTop:20,
        margin:15,
        
    
      },
      media: {
        height: 260,
      },
});

const CardDetails = ({
  brand,
  description,
  id,
  name,
  preview,
  price,
  addProduct,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="cards">
      <Link to={`/product/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={brand}
            image={preview}
            title={brand}
          />
          <CardContent class="cardContent">
            <Typography gutterBottom variant="h6" component="h2" class="name">
              {name}
            </Typography>
            <Typography fontSize="18px" variant="body1" color="textSecondary" component="p" class="brand">
              {brand}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions style={{position:'sticky', bottom:'0rem'}}>
      <Button size="small" color="primary" onClick={addProduct}>
          Add
        </Button>
        
        <Button size="small" color="primary">
          Remove
        </Button>
        
      </CardActions>
    </Card>
  );
};

export default CardDetails;