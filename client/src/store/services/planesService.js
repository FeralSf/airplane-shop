import axios from 'axios'

const getPlanes = async () => {
	const planes = await axios.get('/api/planes') //GET PROXY http://localhost:8000/api/planes

	return planes.data
}

const getPlane = async id => {
	const planes = await axios.get(`/api/planes/${id}`) //GET PROXY http://localhost:8000/api/planes

	return planes.data
}

const createPlane = async planeData => {
	const plane = await axios.post(`/api/planes/`, planeData) //GET PROXY http://localhost:8000/api/planes

	return plane.data
}

const planesService = {
	getPlanes,
	getPlane,
	createPlane,
}

export default planesService

// 31:26
