import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const PaginationSection = ({ count, onPaginationChange }) => <Pagination count={count} color="primary" onChange={onPaginationChange} />;

export default PaginationSection;
