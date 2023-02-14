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

export const singInHandle = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {})
    .catch((error: { message: any }) => {
      return error.message;
    });
};

export const singUpHandle = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {})
    .catch((error: { message: any }) => {
      return error.message;
    });
};

export const logOutHandle = () => {
  return signOut(auth)
    .then(() => {})
    .catch((error: { message: any }) => {
      return error.message;
    });
};

export const providerSignIn = (usedProvider: string) => {
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

  return signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((error) => {
      return error.message;
    });
};

export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email)
    .then(() => {})
    .catch((error) => {
      return error.message;
    });
};
