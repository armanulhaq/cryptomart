var btc = document.getElementById('bitcoin');
var dgc = document.getElementById('dogecoin');
var eth = document.getElementById('ethereum');
var tether = document.getElementById('tether');
var cardano = document.getElementById('cardano');
var ripple = document.getElementById('ripple');

var settings = {
  async: true, //This means the request is asynchronous. The script will continue to run while the request is being made in the background.
  crossDomain: true,
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Ccardano%2Cripple&vs_currencies=usd',
  method: 'GET',
  headers: {},
};
$.ajax(settings).done(function (response) {
  //This method performs an Ajax (asynchronous HTTP) request.
  btc.innerHTML = response.bitcoin.usd;
  dgc.innerHTML = response.dogecoin.usd;
  eth.innerHTML = response.ethereum.usd;
  tether.innerHTML = response.tether.usd;
  cardano.innerHTML = response.cardano.usd;
  ripple.innerHTML = response.ripple.usd;
});
