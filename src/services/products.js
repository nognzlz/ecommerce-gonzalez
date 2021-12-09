import data from '../mocks/products.json';

const productsList = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
    }, 2000);
});

export default productsList;
