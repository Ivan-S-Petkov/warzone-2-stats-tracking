import { collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { UserDB } from "src/Providers/user";

const db = getFirestore();

export async function getCollection(collectionName: string) {
    let data: Object[] = [];
    const colRef = collection(db, collectionName);
    let results = await getDocs(colRef);
    results.forEach((doc) => { data.push(doc.data()) })
    return data;
}

export async function addFriend(user: UserDB, friendID: string) {
    const docRef = doc(db, "users", user.id);

    const friends = user.friends;
    friends.push(friendID);
    // To add friend:
    await updateDoc(docRef, {
        "friends": friends,
    });
}

export async function removeFriend(user: UserDB, friendID: string) {
    const docRef = doc(db, "users", user.id);

    const friends = user.friends;
    friends.splice(friends.indexOf(friendID), 1)
    // To add friend:
    await updateDoc(docRef, {
        "friends": friends,
    });
}



