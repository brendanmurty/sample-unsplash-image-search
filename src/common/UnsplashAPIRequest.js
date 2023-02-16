

function UnsplashApiRequest(endpoint, params) {
  const UnsplashApiUrl = process.env.REACT_APP_UNSPLASH_API_URL;
  const UnsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

  const apiRequestUrl = UnsplashApiUrl +
    endpoint +
    '?client_id=' + UnsplashApiKey + '&' +
    params.join('&');

  return fetch(apiRequestUrl);
}

export default UnsplashApiRequest;
