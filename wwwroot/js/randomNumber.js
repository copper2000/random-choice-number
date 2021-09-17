function setElementTextById(id, text) {
    document.getElementById(id).value = text;
}

function getRandomNumber(maxIntSize) {
    DotNet.invokeMethodAsync('GetRandomNumberForChoiceMp3', 'GenerateRandomInt', maxIntSize)
        .then(result =>
            setElementTextById('randomNumber', result)
        );
}