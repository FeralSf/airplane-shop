const mongoose = require('mongoose')

const planeSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},

	price: {
		type: Number,
		require: true,
	},

	descpiption: {
		type: String,
		require: true,
	},

	capacity: {
		type: String,
		require: true,
	},
	planeImage: {
		type: String,
		require: true,
	},
})

module.exports = mongoose.model('Plane', planeSchema)
