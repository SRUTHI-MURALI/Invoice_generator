import express from 'express'
const router= express.Router()

import {productList, addProduct} from '../Controller/adminController.js'


router.get('/product', productList);
router.post('/addproduct',  addProduct); 


export default router