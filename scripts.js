const converterButton = document.querySelector(".converter-button")
const currencySelect = document.querySelector(".currency-select")

function converterValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.0
    const bitcoinToday = 130.000

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/logo-usa.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/logo-euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/logo-libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/logo-bitcoin.png"
    }
    
    converterValues()
}

currencySelect.addEventListener("change", changeCurrency)

converterButton.addEventListener("click", converterValues)