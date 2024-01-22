async function getToken(tokenUri, tokenRequest) {
  const tokenResponse = await axios.post(tokenUri, tokenRequest, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return tokenResponse.data.access_token;
}

function printer(data) {
  console.log(data);
}

exports = {
  getToken,
  printer
}
