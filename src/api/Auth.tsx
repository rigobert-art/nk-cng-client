import {useState} from "react";
import axios from "axios";

const authApi = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const api = axios.create({
		baseURL: "http://127.0.0.1:4000/api/v1",
	});
};
