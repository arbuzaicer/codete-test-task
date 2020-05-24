import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';

import DemoPostImg from '../../assets/images/demo-img.png'

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    height: 420,
    margin: "10px 30px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PostCard = ({ title, content, id, userId }) => {
  const classes = useStyles();
  const contentData = content && (content.substr(0, 20)+'...');
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isShareActive, setIsShareActive] = useState(false);

  const actionsChange = (hook, setHook) => setHook(!hook);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {userId}
          </Avatar>
        }
        title={title}
        subheader="May 23, 2020"
      />
      <CardMedia
        className={classes.media}
        image={DemoPostImg}
        title="Post image example"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {contentData}
        </Typography>
      </CardContent>
      <ActionsWrapper>
        <IconButton aria-label="add to favorites" onClick={() => actionsChange(isLikeActive, setIsLikeActive)}>
          <FavoriteIcon color={isLikeActive ? "secondary" : "inherit"} />
        </IconButton>
        <IconButton aria-label="share" onClick={() => actionsChange(isShareActive, setIsShareActive)}>
          <ShareIcon color={isShareActive ? "secondary" : "inherit"} />
        </IconButton>
        <Link to={`/posts/${id}`}>
          <Button variant="contained" color="secondary">
            Read more
          </Button>
        </Link>
      </ActionsWrapper>
    </Card>
  );
};

export default PostCard;
