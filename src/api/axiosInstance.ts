// this should be in env

const baseURL = "https://rickandmortyapi.com/api"

import axios from "axios"

const axiosInstance = axios.create({
	baseURL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
})

export default axiosInstance
