const axios = require('axios');

exports.handler = async function(event, context) {
  const { tempster_aoXFWP, p3xphqeLDqrM1kMociAA } = process.env;

  const response = await axios.get('https://api.browserstack.com/automate/plan.json', {
    auth: {
      username,
      password: accessKey
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify(response.data)
  };
}
