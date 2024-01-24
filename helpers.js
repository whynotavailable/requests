export async function getToken(tokenUri, tokenRequest) {
  const tokenResponse = await axios.post(tokenUri, tokenRequest, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return tokenResponse.data.access_token;
}

export function printer(data) {
  if (data.data !== undefined) { // For axios responses
    if (typeof data.data === 'object') {
      console.log(JSON.stringify(data.data, null, 2));
    }
    else {
      console.log(data.data);
    }
    return;
  }

  console.log(data);
}
