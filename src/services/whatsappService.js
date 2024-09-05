const axios = require('axios');

exports.whatsappService = async (data) => {

    const url = process.env.metaURL;
    const token = process.env.whatsAppAccessToken;

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Response data:', response.data);
      return response.data; // Return the response if needed
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      throw error; // Throw the error if you want to handle it in the calling code
    }
}