require('dotenv/config')
const contentful = require("contentful");

const client = contentful.createClient({
  space: "04iiozfw14yr",
  accessToken: process.env.APIKEY
});


const fetchData = async (type) => (
  client.getEntries('ehF3OKHwDp170yvY')
  .then(entry => {
    return entry
  })
  .catch(err => console.log(err))  
)

const handler = async (event) => {
  const data = await fetchData();
  
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

module.exports = { handler }