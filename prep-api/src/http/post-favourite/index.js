const inMemData = require("../../data");

exports.handler = async function http (req) {
    inMemData.friends = [...inMemData.friends, { name: "New friend" }];
    return {
      statusCode: 200,
      headers: {
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'content-type': 'text/html; charset=utf8'
      },
      body: JSON.stringify({
          message: "Saved"
      })
    }
  }