   import axios from 'axios';

   const BASE_URL = "https://602d1e3730ba720017223da9.mockapi.io/"
   
   const axiosClient = axios.create({
     baseURL: BASE_URL
   });
   
 
  export default axiosClient;
