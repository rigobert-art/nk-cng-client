import { useState } from 'react';
import axios from 'axios';

const authApi = () => {
    const [ loading, setLoading ] = useState(false);
    const [error, setError ] = useState(null);

    const api = axios.create({
        baseURL: 'http://you-api-url.com/api'
    })
}
