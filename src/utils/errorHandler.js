import { toast } from "react-toastify";

const handleError = (error) => {
    console.error('An error occurred:', error);
  
    if (error.response) {

      switch (error.response.status) {
        case 400:
          toast.error('Bad Request: ' + (error.response.data.message || 'The request was invalid.'));
          break;
        case 401:
          toast.warning('Unauthorized: ' + (error.response.data.message || 'You are not authorized to perform this action.'));
          break;
        case 403:
          toast.warning('Forbidden: ' + (error.response.data.message || 'You do not have permission to perform this action.'));
          break;
        case 404:
          toast.info('Not Found: ' + (error.response.data.message || 'The requested resource was not found.'));
          break;
        case 409:
          toast.error('Conflict: ' + (error.response.data.message || 'There was a conflict with the request.'));
          break;
        case 422:
          toast.warning('Unprocessable Entity: ' + (error.response.data.message || 'The request was well-formed but was unable to be followed due to semantic errors.'));
          break;
        case 500:
          toast.error('Internal Server Error: ' + (error.response.data.message || 'An unexpected error occurred on the server.'));
          break;
        default:
          toast.error('Error: ' + (error.response.data.message || 'An unexpected error occurred.'));
      }
    } else if (error.request) {
      toast.error('Network Error: ' + (error.message || 'No response was received from the server.'));
    } else {
      toast.error('Error: ' + (error.message || 'An unexpected error occurred.'));
    }
};

export default handleError;
