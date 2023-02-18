import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { UserDB } from "src/Providers/user";

const db = getFirestore();

export function readUserData(userId: string): any | boolean {
    const docRef = doc(db, "users", userId);
    return getDoc(docRef).then((res) => {
        if (res.exists()) {
            return res.data();
        }
        else {
            return false;
        }
    })
}

export function writeUserData(userId: string, userDB: UserDB) {
    const userRef = doc(db, "users", userId);
    return setDoc(userRef, userDB);
}

export function updateUserData(userId: string, data: any) {
    const userRef = doc(db, "users", userId);
    return updateDoc(userRef, data);
}

