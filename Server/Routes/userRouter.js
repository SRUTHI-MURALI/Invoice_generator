import express from 'express'
const router= express.Router()

import {itemAdded,userInvoice,registerUser,userLogin,getAllProducts,getAddedItems} from '../Controller/userController.js'


router.post('/register',registerUser)
router.post('/login',userLogin)
router.get('/getproducts',getAllProducts)
router.post('/additem/:id',itemAdded)
router.get('/getaddeditems/:id',getAddedItems)
router.get('/invoice/:id',userInvoice)


export default router