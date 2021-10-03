import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

const auth = getAuth();
const signUp = (email, password, loggedIn, username, setDisplayName, errorCheck) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            loggedIn(true);
            updateProfile(auth.currentUser, {
                displayName: username
            }).then(() => {
                setDisplayName(user.displayName)
            }).catch((error) => {
                errorCheck(error);

            });

        })
        .catch((error) => {
            const errorMessage = error.message;
            errorCheck(errorMessage);

        });

};

const signIn = (email, password, loggedIn, setDisplayName, errorCheck) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setDisplayName(user.displayName);
            loggedIn(true);

        })
        .catch((error) => {
            const errorMessage = error.message;
            errorCheck(errorMessage);
        });
}

export {
    signIn
};
export default signUp;