const handleError = (error) => {
    // Log the error to the console
    console.error('An error occurred:', error);
  
    // Determine the type of error and return an appropriate message
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      switch (error.response.status) {
        case 400:
          alert('Bad Request: ' + (error.response.data.message || 'The request was invalid.'));
          break;
        case 401:
          alert('Unauthorized: ' + (error.response.data.message || 'You are not authorized to perform this action.'));
          break;
        case 403:
          alert('Forbidden: ' + (error.response.data.message || 'You do not have permission to perform this action.'));
          break;
        case 404:
          alert('Not Found: ' + (error.response.data.message || 'The requested resource was not found.'));
          break;
        case 409:
          alert('Conflict: ' + (error.response.data.message || 'There was a conflict with the request.'));
          break;
        case 422:
          alert('Unprocessable Entity: ' + (error.response.data.message || 'The request was well-formed but was unable to be followed due to semantic errors.'));
          break;
        case 500:
          alert('Internal Server Error: ' + (error.response.data.message || 'An unexpected error occurred on the server.'));
          break;
        default:
          alert('Error: ' + (error.response.data.message || 'An unexpected error occurred.'));
      }
    } else if (error.request) {
      // The request was made but no response was received
      alert('Network Error: ' + (error.message || 'No response was received from the server.'));
    } else {
      // Something happened in setting up the request that triggered an Error
      alert('Error: ' + (error.message || 'An unexpected error occurred.'));
    }
  };
  
  export default handleError;