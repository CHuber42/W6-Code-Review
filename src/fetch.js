export async function getRates() {
  try {
    let response = await fetch (`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
    let jsonedResponse;
    if (response.ok && response.status === 200) {
      jsonedResponse = await response.json();
    }
    else {
      jsonedResponse = false; 
    }
    return jsonedResponse.conversion_rates;
  }
  catch (error) {
    console.log(error);
  }

}
