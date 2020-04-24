import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getRates } from "./fetch.js"


$(document).ready(function() {
  $("#submit").click(async function() {
    let rates = await getRates();
    console.log(rates)
    
    
  })


})

