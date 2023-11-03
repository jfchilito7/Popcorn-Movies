'use strict';

const api_key = 'e83cd4fa859dca5842f8bcb250570a77'

const imageBaseUrl = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export {imageBaseUrl, api_key, fetchDataFromServer};