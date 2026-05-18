const axios = require('axios');

const sendDealToTracker = async (dealData) => {
  try {
    const response = await axios.post(
      `${process.env.TRACKER_SERVICE_URL}/api/tracker/deals/record`,
      dealData,
      {
        headers: {
          'X-Service-Auth': process.env.SERVICE_AUTH_TOKEN,
          'Content-Type': 'application/json'
        },
        timeout: 5000 // Batas maksimal 5 detik agar tidak membebani server kita
      }
    );
    
    console.log('[TRACKER INTEGRATION] Deal recorded successfully:', response.data);
    return response.data;
  } catch (error) {
    console.warn('[TRACKER INTEGRATION] Warning - Failed to record deal:', error.message);
    return { success: false, error: error.message };
  }
};

module.exports = { sendDealToTracker };