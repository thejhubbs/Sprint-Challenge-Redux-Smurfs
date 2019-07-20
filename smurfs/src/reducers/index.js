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
  switch(action){
    case FETCH_SMURFS:

    case FETCH_SMURFS_SUCCESS:

    case FETCH_SMURFS_FAIL:
      
    default:
      return state

  }
}

export default reducer

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
