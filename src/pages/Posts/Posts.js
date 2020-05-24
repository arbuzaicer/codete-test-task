import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

import {
  getPostsSelector,
  getSearchDataSelector,
} from '../../store/selectors/rootSelectors';
import { getPostsAction } from '../../store/actions/rootActions';
import PostCard from '../../components/Post_Card';
import Preloader from '../../components/Preloader';
import PaginationSection from '../../components/Pagination';

const PostsWrapper = styled.div`
  .posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Posts = () => {
  const [isLoadedData, setIsLoadedData] = useState(false);
  const [currentPostsPage, setCurrentPostsPage] = useState(0);
  const dispatch = useDispatch();
  const postsData = useSelector(getPostsSelector);
  const searchData = useSelector(getSearchDataSelector);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPostsAction());
      setIsLoadedData(true);
    }, 1500);
  }, [dispatch]);

  // pagination section

  const postsPerPage = 6;
  const paginationCount = Math.ceil(postsData.length / postsPerPage);
  const onPaginationChange = (e, value) => {
    setCurrentPostsPage(value - 1); //-1, because pagination count start with 1, and my array starting with 0
  };
  const displayedPosts =
    _.chunk(postsData, postsPerPage)[currentPostsPage] || [];
  const filteredData = !searchData
    ? displayedPosts
    : postsData.filter(
        (post) =>
          post.title.includes(searchData) || post.body.includes(searchData)
      );

  const posts = filteredData.map((post) => (
    <PostCard
      title={post.title}
      content={post.body}
      key={post.id}
      id={post.id}
      userId={post.userId}
    />
  ));

  return (
    <>
      <PostsWrapper>
        {!isLoadedData && <Preloader />}
        <div className="posts">{postsData.length ? posts : null}</div>
        {searchData && !filteredData.length && <h2>There is no search results</h2>}
        {posts.length ? (
          <PaginationSection
            count={paginationCount}
            onPaginationChange={onPaginationChange}
          />
        ) : null}
      </PostsWrapper>
    </>
  );
};

export default Posts;
