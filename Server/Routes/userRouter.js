import express from 'express'
const router= express.Router()

import {Home} from '../Controller/userController.js'

router.get('/',Home)

export default router