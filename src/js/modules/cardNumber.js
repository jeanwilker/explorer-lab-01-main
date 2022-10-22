import setCardType from './setCardType.js'

export default function initCardNumber() {

  const cardNumber = document.querySelector("#card-number")

  const cardNumberPattern = {
    mask: [
      {
        mask: "0000 0000 0000 0000",
        regex: /^4\d{0,15}/,
        cardType: "visa",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2}\d{0,12})/,
        cardType: "mastercard",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: /^3[47]\d{0,13}/,
        cardType: "americanExpress",
      },
      {
        mask: "0000 0000 0000 0000",
        cardType: "default",
      },
    ],
    dispatch: function (appended, dynamicMasked) {
      const number = (dynamicMasked.value + appended).replace(/\D/g, "")
      const foundMask = dynamicMasked.compiledMasks.find(function (item) {
        return number.match(item.regex)
      })
      return foundMask
    },
  }
  const cardNumberMasked = IMask(cardNumber, cardNumberPattern)

  cardNumberMasked.on("accept", () => {
    const cardType = cardNumberMasked.masked.currentMask.cardType
    setCardType(cardType)
    updateCardNumber(cardNumberMasked.value)
  })

  function updateCardNumber(number) {
    const ccNumber = document.querySelector(".cc-number")
    ccNumber.innerText = number === "" ? "1234 5678 9012 3456" : number
  }
}