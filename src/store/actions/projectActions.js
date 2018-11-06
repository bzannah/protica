const createProject = project => {
    return (dispatch, getState) => {

        // make async call to database - pause the dispatch


        // call on the dispatch 
        dispatch({ type: 'CREATE_PROJECT', project });
    }
}

export default createProject;