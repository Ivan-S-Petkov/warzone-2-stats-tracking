import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';

const auth = getAuth();
const providerG = new GoogleAuthProvider();
const providerF = new FacebookAuthProvider();
const providerT = new TwitterAuthProvider();

export const singInHandle = (event: any, email: string, password: string) => {
  event.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
    .then((res: any) => {})
    .catch((error: { message: any }) => {
      throw new Error(error.message);
    });
};

export const singUpHandle = (event: any, email: string, password: string) => {
  event.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
    .then((res: any) => {})
    .catch((error: { message: any }) => {
      throw new Error(error.message);
    });
};

export const logOutHandle = (event: any) => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      throw new Error('Error');
    });
};

export const providerSignIn = (event: any, usedProvider: string) => {
  event.preventDefault();
  let provider: any = null;
  if (usedProvider === 'facebook') {
    provider = providerF;
  }
  if (usedProvider === 'google') {
    provider = providerG;
  }
  if (usedProvider === 'twitter') {
    provider = providerT;
  }

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Provider Access Token. You can use it to access the Provider API.
      const credential = provider.credentialFromResult(result);
      //   const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const resetPassword = (event: any, email: string) => {
  event.preventDefault();

  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
