import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import { getRates } from "./fetch.js";
import { processResult, symbolTranslation } from "./resultsFinder.js";


$(document).ready(async function() {
  let rates = await getRates();

  $("#targetCurrency").on("change", async function() {
    let userDollars = $("#usd").val();
    let targetCurrency = $("#targetCurrency").val();
    
    if (userDollars <= 0) {
      $("#results_presentation").text("Your input dollars are invalid: [None] or < 0!");
    }
    else if (rates[targetCurrency] && userDollars > 0) {
      let finalResult = processResult(userDollars, targetCurrency, rates);
      let currencySymbol = symbolTranslation(targetCurrency);
      $("#results_presentation").text(`You will receive: ${finalResult.toFixed(2)} ${currencySymbol}`);
    }
    else {
      $("#results_presentation").text(`I'm sorry, something went wrong. You may not have input a dollar value, 
                                        or chosen a target currency that does not exist, or the API call may have failed. 
                                        Check the console for details.`);
      console.log(`Dollars Input: ${userDollars}, Currency in list: ${rates[targetCurrency]}`);
    }
  });
});

