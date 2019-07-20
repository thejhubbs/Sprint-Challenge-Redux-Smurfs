import axios from 'axios'
import reducer from '../reducers';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS = "FETCH_SMURFS"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL"

export const CREATE_SMURF = "CREATE_SMURF"
export const CREATE_SMURF_SUCCESS = "CREATE_SMURF_SUCCESS"
export const CREATE_SMURF_FAIL = "CREATE_SMURF_FAIL"

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => (dispatch) => {
  dispatch({type: FETCH_SMURFS});
  axios
    .get('http://localhost:3333/smurfs')
    .then((res) => { 
      dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: FETCH_SMURFS_FAIL, payload: err.data}))
}

export const createSmurf = () => (dispatch) => {
  dispatch({type: CREATE_SMURF});
  axios
    .post('http://localhost:3333/smurfs')
    .then((res) => {
        console.log(res)
        dispatch({type: CREATE_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: CREATE_SMURF_FAIL, payload: err.data}))
}