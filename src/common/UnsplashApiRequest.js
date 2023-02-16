/**
 * Common: UnsplashApiRequest
 * 
 * Uses the Unsplash API configuration values from the ".env" file
 * to send an API request and return the results as a JSON object.
 * 
 * In a production environment, this would likely use a user-based authentication
 * process (https://unsplash.com/documentation/user-authentication-workflow)
 * which would allow the system to provide user-specific customisation options 
 * or allow them to filter photo results by just the photos they've uploaded.
 * 
 * This should also handle the situation where the API returns a rate limiting
 * response or an error state.
 * 
 * Related Unsplash API documentation: https://unsplash.com/documentation
 * 
 **/
function UnsplashApiRequest(endpoint, params) {

  const UnsplashApiUrl = process.env.REACT_APP_UNSPLASH_API_URL;
  const UnsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

  const apiRequestUrl = UnsplashApiUrl +
    endpoint +
    '?client_id=' + UnsplashApiKey + '&' +
    params.join('&');

  return fetch(apiRequestUrl).then(response => response.json());

}

export default UnsplashApiRequest;
