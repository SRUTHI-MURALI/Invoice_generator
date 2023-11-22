import express from 'express'
const router= express.Router()

import {Home} from '../Controller/adminController.js'

router.get('/',Home)

export default router