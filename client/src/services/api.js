const {MongoClient} = require('mongodb');
const uri = 'mongodb://localhost:27017';
const databaseName = 'CourseProject';

async function addToCart(productId) {
    const client  = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db(databaseName);
        const cartCollection = db.collection('shopping_cart');

        await cartCollection.insertOne({productId});

        console.log(`Product ${productId} added to the cart`);
    }catch (err){
        console.error('Error adding to cart:', err);

    }finally{
        await client.close();
    }
}
module.exports = {addToCart};