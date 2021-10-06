import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile, signOut
} from "firebase/auth";

const auth = getAuth();

//Sign up users
const signUp = (email, password, loggedIn, username, setDisplayName, errorCheck) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            loggedIn(true);
            updateProfile(auth.currentUser, {
                displayName: username //Add user provided display name to profile
            }).then(() => {
                setDisplayName(user.displayName) //Pass display name to parent state in App.js
            }).catch((error) => {
                errorCheck(error); //Grab error to display to user

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

const logout = (loggedIn) => {
    signOut(auth).then(() => {
        loggedIn(false);
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

export {
    signIn, logout
};
export default signUp;