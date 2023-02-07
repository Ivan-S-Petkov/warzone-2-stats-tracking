import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const auth = getAuth();

export const singInHandle = (event: any, email: string, password: string) => {
  event.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
    .then((res: any) => {
      // authContext.setUser(res);
      console.log('Sing In');
    })
    .catch((error: { message: any }) => {
      throw new Error(error.message);
    });
};

export const singUpHandle = (event: any, email: string, password: string) => {
  event.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
    .then((res: any) => {
      // authContext.setUser(res);
      console.log('Sign Up');
    })
    .catch((error: { message: any }) => {
      throw new Error(error.message);
    });
};

export const logOutHandle = (event: any) => {
  signOut(auth)
    .then(() => {
      console.log('Sign Out');
    })
    .catch((error) => {
      throw new Error('Error');
    });
};
