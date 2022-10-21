export default function initAddButton() {
  const addButton = document.querySelector("#btn-card")
  addButton.addEventListener("click", handleclick)

  function handleclick(event) {
    event.preventDefault()
    alert("Cartão adicionado!")
  }
}