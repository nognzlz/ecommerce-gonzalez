import data from '../mocks/products.json';
import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore/lite';
import firestore from './firestore';

export const getMockedProductsList = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
    }, 2000);
});

export const getProductList = async () => {
    const productsCol = collection(firestore, 'productos');
    const productsSnapshot = await getDocs(productsCol);
    const productsList = productsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return productsList;
};

export const getProductById = async (id) => {
    const itemRef = doc(firestore, 'productos', id);
    const snapshot = await getDoc(itemRef);
    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
    }
    return {};
};

export const getProductListByCategory = async (category) => {
    const q = query(
        collection(firestore, 'productos'),
        where('categories', 'array-contains', category)
    );
    const snapshot = await getDocs(q);
    const productsList = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return productsList;
};
