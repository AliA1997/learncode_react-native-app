
export const get = (url) => (
    fetch(new Request(url, {
            mode: 'include',
            method: 'GET',
            mode: 'cors',
        })
    )
    .then(res => res.json())
    .then(resJSON => console.log("RESJSON---------------------", resJSON))
    .catch(error => console.log("Get Error--------------", error))
);


export const post = (url, body) => (
    fetch(new Request(url, {
            mode: 'include',
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body)
        })
    )
    .then(res => res.json())
    .then(resJSON => console.log("RESJSON-------------", resJSON))
    .catch(err => console.log("Post Error--------------", error))
);