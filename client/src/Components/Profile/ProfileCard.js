import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "../../JS/actions/user";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { deleteUser } from "../../JS/actions/user";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow:"5px 7px #888888",
  },
});
const ProfileCard = ({ el }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://vignette.wikia.nocookie.net/fan-fiction-library/images/1/15/Admin.png/revision/latest?cb=20140917130743"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {el.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {el.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deleteUser(el._id));
          }}
        >
          delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
