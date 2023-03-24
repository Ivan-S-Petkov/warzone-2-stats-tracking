import { collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

const db = getFirestore();

export async function getCollection(collectionName: string) {
    let data: Object[] = [];
    const colRef = collection(db, collectionName);
    let results = await getDocs(colRef);
    results.forEach((doc) => { data.push(doc.data()) })
    return data;
}