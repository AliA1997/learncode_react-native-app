
export const get = (url) => (
    fetch(new Request(url, {
            mode: 'include',
            method: 'GET',
            mode: 'cors',
        })
    )
    .then(res => res.json())
    .then(resJSON => resJSON)
    .catch(error => error)
);


export const post = (url, body, accessToken="", contentType="application/json") => {
   return fetch(new Request(url, {
            mode: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {
                "Authorization": "Bearer " + accessToken,
                'Content-Type': contentType,
            },
            body: JSON.stringify(body)
        })
    )
    .then(res => res.json())
    // .then(resJSON => resJSON)
    .catch(error => console.log("Post Error--------------", error))
}