import express from 'express'
const router= express.Router()

import {Home,itemAdded,userInvoice,registerUser,userLogin} from '../Controller/userController.js'

router.get('/',Home)
router.post('/register',registerUser)
router.post('/login',userLogin)
router.post('/additem/:id',itemAdded)
router.get('/invoice/:id',userInvoice)


export default router