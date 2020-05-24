import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ArrowBack } from '@material-ui/icons';

import { getPostByIdAction } from '../../store/actions/rootActions';
import { getSinglePostSelector } from '../../store/selectors/rootSelectors';
import DemoPostImg from '../../assets/images/demo-img.png';

const LinkWrapper = styled.section`
  position: fixed;
  left: 5%;
  top: 15%;
  transform: scale(1.5);
`;

const SinglePostWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #fff;
  img {
    margin-top: 20px;
    width: 100%;
  }
`;

const SinglePost = () => {
  const dispatch = useDispatch();
  const postData = useSelector(getSinglePostSelector);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostByIdAction(id));
  }, [dispatch, id]);

  return (
    postData && (
      <>
        <LinkWrapper>
          <Link to="/posts">
            <ArrowBack color={"primary"} />
          </Link>
        </LinkWrapper>
        <SinglePostWrapper>
          <span>
            <i>Author: userId {postData.userId}</i>
          </span>
          <img src={DemoPostImg} alt={postData.title} />
          <h2>{postData.title}</h2>
          <p>{postData.body}</p>
        </SinglePostWrapper>
      </>
    )
  );
};

export default SinglePost;
