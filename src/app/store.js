import { configureStore } from '@reduxjs/toolkit';
import graphReducer from '../features/graph/graphSlice'
import clickActionReducer from '../features/clickAction/clickActionSlice'

export default configureStore({
  reducer: {
    graph: graphReducer,
    clickAction: clickActionReducer
  }
});
