

export function get(url, typeOfData, queryParams=null, accessToken, credentials='include', generic400Text=true) {
    return new Promise((resolve, reject) => {
        //Return a Promise to get the resolved value from the fetch call if the status code is 200 else reject it .
        //If the queryParams are truthy or contains a value
        if(queryParams) {
            url += '?';
            const queryString = Object.keys(queryParams).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
                                                        .join('&');
            url += queryString;
        }
        return fetch(new Request(url, {
            method: 'GET',
            //Have the request be access any origin
            credentials,
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                //Have your user credentials be passed along only in the same origin
                credentials: 'same-origin'
            }
        }))
        .then(response => {
            switch(response.status) {
                case 200:
                    response.json().then(data => resolve(data));
                    break;
                case 204:
                    response.text().then(() => resolve('204 status code returned'));
                    break;
                case 400:
                    response.text().then(data => {
                        //While in the case of 400 and non 200 status code reject the promise.
                        reject(generic400Text ? `Error when fetching data for ${typeOfData}:${data.responseText}` : data)
                    });
                    break;
                case 401:
                //401 status code is unauthorized.
                    reject('Not authorized, cookie expired, if you believe this is a mistake try logging back in.')
                    break;
                case 403: 
                    reject(`Not allowed to access ${typeOfData}.`)
                    break;
                case 406:
                    reject(`Media input type is not valid type for response.`);
                    break;
                case 500:
                    reject(`If there is an error while fetching ${typeOfData}. If the problem persists please contact ${config.supportEmail}.`)
                    break;
                default:
                    reject(`Unknown status code ${response.status}`);
                    break;
            }
            //Catch any errors while fetching data.
        }).catch(error => {
            console.error("Get Ajax Creator Error-----------", error);
        });
    })
}