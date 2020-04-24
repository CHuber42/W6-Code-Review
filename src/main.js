import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getRates } from "./fetch.js";
import { processResult } from "./resultsFinder.js"


$(document).ready(function() {

    $("#submit").click(async function() {
    let userDollars = $("#usd").val();
    let targetCurrency = $("#targetCurrency").val();
    let rates = await getRates();

    if (rates[targetCurrency] && userDollars > 0) {
      let finalResult = processResult(userDollars, targetCurrency, rates);
      $("#results_presentation").text(`${finalResult} ${targetCurrency}`);
    }
    else {
      $("#results_presentation").text("I'm sorry, your input was invalid. You may not have input a dollar value, or chosen a target currency that does not exist.");
    }
  })
})

