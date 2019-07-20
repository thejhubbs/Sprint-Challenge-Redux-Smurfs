import { FETCH_SMURFS, FETCH_SMURFS_FAIL, FETCH_SMURFS_SUCCESS, CREATE_SMURF, CREATE_SMURF_SUCCESS, CREATE_SMURF_FAIL } from "../actions";

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
          smurfs: action.payload
        };
    case FETCH_SMURFS_FAIL:
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload
        };
    case CREATE_SMURF:
            return {
              ...state,
              addingSmurf: true,
              error: null
            };
    case CREATE_SMURF_SUCCESS:
            return {
              ...state,
              addingSmurf: false,
              smurfs: action.payload
            };
    case CREATE_SMURF_FAIL:
            return {
              ...state,
              addingSmurf: false,
              error: action.payload
            };

    default:
      return state

  }
}

export default reducer
