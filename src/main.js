import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getRates } from "./fetch.js"


$(document).ready(function() {
  $("#submit").click(async function() {
    let userDollars = $("#usd").val();
    let targetCurrency = $("#targetCurrency").val();
    console.log(userDollars, targetCurrency)

    let rates = await getRates();
    console.log(rates)
    
    
  })


})

