import { createReducer } from '@reduxjs/toolkit';
import setFilter from './filter-actions';

export default createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});
