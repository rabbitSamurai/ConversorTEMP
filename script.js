
function celsiustoFarenheit () {
    let celsius = document.getElementById('inputCelsius').value;
    celsiusCalculo = parseInt(celsius) + 32;
    console.log(celsiusCalculo)
    document.getElementById('span').innerHTML = celsiusCalculo + ' em Farenheit';
}

function farenheitToCelsius (){
    let farenheit = document.getElementById('inputFarenheit').value;
    farenheitCalculo = parseInt(farenheit) - 32 * 5/9
    console.log(farenheitCalculo)
    document.getElementById('spanf').innerHTML = farenheitCalculo + 'em celsius'
}