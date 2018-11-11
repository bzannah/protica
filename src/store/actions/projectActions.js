const createProject = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database - pause the dispatch
        const firestore = getFirestore();

        firestore.collection('projects').add({ // asyn
            ...project,
            authorFirstName: 'Merry',
            authorLastName: 'Joe',
            authorId: 9281,
            createdAt: new Date()
        }).then(() => {
            // call on the dispatch once the adding has finished
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });

    }
}

export default createProject;