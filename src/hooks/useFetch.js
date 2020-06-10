import React, { useState, useEffect } from 'react';

const useFetch = (url, method , headers) => {
    let options = {};
    // console.log('sampai di fetch');
    const [data, setData] = useState([]);

    if(method) {
        options['method'] = method;
    }

    if(headers) {
        options['headers'] = headers;
    }
    
    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setData(data.teams);
            })
    }, [])

    // console.log(data);

    return [data];
}

export default useFetch;