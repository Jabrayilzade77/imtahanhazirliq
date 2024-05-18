import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())


const productsSchema = new mongoose.Schema({
    title: String,
    price:Number,

  });

  const ProductModel = mongoose.model('product', productsSchema);
app.get('/myapp',async (req, res) => {
    const products = await ProductModel.find();
  res.send(products)
})

app.get('/myapp/:id',async (req, res) => {
    const {id} = req.params
    const products = await ProductModel.findById(id);
  res.send(products)
})


app.post('/myapp',async (req, res) => {
    const obj = req.body
    const product = new ProductModel(obj);
    await product.save();

  res.send(product)
})


app.delete('/myapp/:id',async (req, res) => {
    const {id} = req.params
    const products = await ProductModel.findByIdAndDelete(id);
  res.send(products)
})
mongoose.connect('mongodb+srv://yusif:yusif@yusif.ohi9fkp.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})