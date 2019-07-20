import { FETCH_SMURFS, FETCH_SMURFS_FAIL, FETCH_SMURFS_SUCCESS } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS:
        return {
          ...state,
          fetchingSmurfs: true,
          error: null
        };
    case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          fetchingSmurfs: false,
          smurfs: action.payload.smurfs
        };
    case FETCH_SMURFS_FAIL:
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload
        };

    default:
      return state

  }
}

export default reducer
