const Plane = require('../models/plane')
const { param } = require('../routes/planes')

// @param {*}  req
// @param {*} res

//Получение самолётов из БД

const getPlanes = async (req, res) => {
	try {
		const planes = await Plane.find() //Запрос в БД
		res.status(200).json(planes)
	} catch (error) {
		res.status(500).json({
			message: 'Не удалось получить список самолётов, повторите попытку',
		})
	}
}

// //Создать самолет
//  * @param {*} req
// @param {*} res
// @returns {*}

//Получение самолета по ID
const getPlane = async (req, res) => {
	try {
		const plane = await Plane.find({ _id: req.params.id }) //создаёт константу plane, await-ждём ответ от БД, Plane.ищет
		res.status(200).json(plane)
	} catch (error) {
		res.status(400).json({
			message: 'Cамолет не найден',
		})
	}
}

//Создание самолёта

const createPlane = async (req, res) => {
	//Валидация
	const errors = {}
	if (!req.body.name) {
		errors.name = { message: 'Введите имя' }
	}

	if (!req.body.price) {
		errors.price = { message: 'Введите цену' }
	}

	if (!req.body.descpiption) {
		errors.descpiption = { message: 'Введите описание' }
	}

	if (!req.body.capacity) {
		errors.capacity = { message: 'Укажите вместимость ' }
	}

	// if (!req.body.capacity && req.body.capacity.length > 2) {
	// 	errors.capacity = { message: 'Вместимость не может быть больше 99' }
	// }

	if (!req.file) {
		errors.planeImage = { message: 'Добавьте фото самолёта' }
	}

	if (Object.keys(errors).length > 0) {
		return res.status(400).json(errors)
	}

	try {
		const { name, price, descpiption, capacity } = req.body //отправляем массив с моковыми данными
		const plane = await Plane.create({
			name,
			price,
			descpiption,
			capacity,
			planeImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
		})

		res.status(201).json(plane)
	} catch (error) {
		res.status(500).json({ message: 'Неудалось создать, повторите попытку' })
	}
}

module.exports = {
	createPlane,
	getPlane,
	getPlanes,
}
