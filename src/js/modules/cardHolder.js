export default function initCardHolder() {
  const cardHolder = document.querySelector("#card-holder")
  cardHolder.addEventListener("input", updateCardHolder)

  function updateCardHolder() {
    const ccHolder = document.querySelector(".cc-holder .value")
    ccHolder.innerText = cardHolder.value === "" ? "FULANO DA SILVA" : cardHolder.value
  }
}