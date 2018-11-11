const initState = {
    projects: [
        { id: '1', title: 'Project Spytro', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { id: '2', title: 'Project Boltab', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { id: '3', title: 'Project Spynx', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { id: '4', title: 'Project Teere', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
    ]
}

const projectReducer = (state = initState, action) => {
    if (action.type === 'CREATE_PROJECT') {
        console.log('created', action.project);
        return state;
    } else if (action.type === 'CREATE_PROJECT_ERROR') {
        console.log('create project errored', action.err);
        return state;
    }
    else {
        return state;
    }
}

export default projectReducer;
