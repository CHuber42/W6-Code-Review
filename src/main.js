import * as THREE from 'three';

// import $ from 'jquery';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
// import './styles.css';
// import { getRates } from "./fetch.js";
// import { processResult, symbolTranslation } from "./resultsFinder.js";


// $(document).ready(async function() {
//   let rates = await getRates();

//   $("#targetCurrency").on("change", async function() {
//     let userDollars = $("#usd").val();
//     let targetCurrency = $("#targetCurrency").val();
    
//     if (rates[targetCurrency] && userDollars > 0) {
//       let finalResult = processResult(userDollars, targetCurrency, rates);
//       let currencySymbol = symbolTranslation(targetCurrency);
//       $("#results_presentation").text(`You will receive: ${finalResult.toFixed(2)} ${currencySymbol}`);
//     }
//     else {
//       $("#results_presentation").text(`I'm sorry, something went wrong. You may not have input a dollar value, 
//                                         or chosen a target currency that does not exist, or the API call may have failed. 
//                                         Check the console for details.`);
//       console.log(`Dollars Input: ${userDollars}, Currency in list: ${rates[targetCurrency]}`);
//     }
//   });
// });

$(document).ready(function() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  var animate = function () {
    requestAnimationFrame( animate );
  
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    renderer.render( scene, camera );
  };
  
  animate();
})


