"use client"
import db from '@/firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export const createAdmin = async (username, password, name) => {
    try {
        const docRef = await addDoc(collection(db, "admin"), {
            username: username,
            password: password,
            name: name,
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (error) {
        console.error("Error adding document ", error);
        return false;
    }
}
