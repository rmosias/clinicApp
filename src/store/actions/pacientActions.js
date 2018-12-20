export const pacientActions = (pacient) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore ();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('pacients').add({
            ...pacient,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=> {
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
}; 