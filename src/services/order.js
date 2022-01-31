import { collection, addDoc } from 'firebase/firestore/lite';
import firestore from './firestore';

export const sendOrder = async (order) => {
    try {
        const ordernesCol = collection(firestore, 'ordenes');
        await addDoc(ordernesCol, order);
        return true;
    } catch (error) {
        return false;
    }
};
