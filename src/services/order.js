import { collection, addDoc } from 'firebase/firestore/lite';
import firestore from './firestore';

export const sendOrder = async (order) => {
    try {
        const ordernesCol = collection(firestore, 'ordenes');
        return await addDoc(ordernesCol, order);
    } catch (error) {
        return false;
    }
};
