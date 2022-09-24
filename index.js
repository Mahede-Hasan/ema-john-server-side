const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ihbrvor.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');

        app.get('/product', async (req, res) => {
<<<<<<< HEAD
            console.log('query', req.query);
=======
>>>>>>> aa5c44d5ea98c612319493b87b171eaa59050484
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);

            const query = {};
<<<<<<< HEAD
            const cursor = productCollection.find(query);
=======
            const cursor = productCollection.find
                (query);
>>>>>>> aa5c44d5ea98c612319493b87b171eaa59050484
            let products;
            if (page || size) {
                products = await cursor.skip(page * size).limit(size).toArray();
            }
            else {
                products = await cursor.toArray();
            }

            res.send(products);
        });

        app.get('/productCount', async (req, res) => {
            const count = await productCollection.estimatedDocumentCount();
<<<<<<< HEAD
            res.send({ count });
        });

        app.post('/productByKeys', async (req, res) => {
            const keys = req.body;
            const ids = keys.map(id => ObjectId(id));
            const query = { _id: { $in: ids } }
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            console.log(keys);
            res.send(products);
=======
            res.send({ count })
>>>>>>> aa5c44d5ea98c612319493b87b171eaa59050484
        })
    }
    finally {

    }
}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('hello from express.js')
})

app.listen(port, () => {
    console.log('server running', port)
})