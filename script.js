const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeUpperCaseElement = document.getElementById("includeUpperCase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")
const form = document.getElementById("passwordGeneratorForm")
const passwordDisplay = document.getElementById("PasswordDisplay")

const lowerCharCode = arrayFromLowToHigh(97, 122)
const UpperCharCode = arrayFromLowToHigh(65, 90)
const NumberCharCode = arrayFromLowToHigh(48, 57)
const SymbolsCharCode = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value;
    const includeUpperCase = includeUpperCaseElement.checked; 
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password 
})


function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols){
    let charCodes = lowerCharCode
    if(includeUpperCase){
        charCodes = charCodes.concat(UpperCharCode)
    }if (includeNumbers){
        charCodes = charCodes.concat(NumberCharCode)
    }if (includeSymbols){
        charCodes = charCodes.concat(SymbolsCharCode)
    }

    const passwordCharacter = []
    for(let i = 0; i < characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacter.push(String.fromCharCode(characterCode))
    }
    return passwordCharacter.join('')
}

function arrayFromLowToHigh(low, high){
    const array = []
    for(let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e){
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}
