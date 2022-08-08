// const express = require('express')
// const router = express.Router()
// const { getPlane, getPlanes, createPlane } = require('../controllers/planes')
// const path = require('path')
// const multer = require('multer')

// //Показываем где хранить IMG
// const storage = multer.diskStorage({
// 	destination: './assets',
// 	filename: (req, file, cb) => {
// 		cb(
// 			null,
// 			file.fieldname + '-' + Date.now() + paths.extname(file.originalname),
// 		)
// 	},
// })

// const upload = multer({ storage })

// // Route GET API/planes
// // des Получить все самолёты
// //_______________________________________________
// // router.get('/', (req, res) => response.send('Get All planes'))
// // Заменяем на
// router.get('/', getPlanes) //Из '../controllers/planes'

// // Route GET /API/planes/:id
// // Получить самолёт по айди
// router.get('/:id', getPlane)

// // ROUTE POST /api/planes/
// // Создать самолёт
// router.post('/', upload.single('planeImage'), createPlane)

// module.exports = router

const express = require('express')
const { getPlanes, createPlane, getPlane } = require('../controllers/planes')
const router = express.Router()

const multer = require('multer')
const path = require('path')

// Показываем, где хранить загружаемые файлы
const storage = multer.diskStorage({
	destination: './assets/',
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname),
		)
	},
})

const upload = multer({ storage })

// @route GET /api/planes
// @desc Получить все самолёты
router.get('/', getPlanes)

// @route GET /api/planes/:id
// @desc Получить самолёт по id
router.get('/:id', getPlane)

// @route POST /api/planes
// @desc Создать самолёт
router.post('/', upload.single('planeImage'), createPlane)

module.exports = router
