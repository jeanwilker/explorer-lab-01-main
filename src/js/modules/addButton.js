import Swal from "sweetalert2"

export default function initAddButton() {
  const addButton = document.querySelector("#btn-card")
  addButton.addEventListener("click", handleclick)

  function handleclick(event) {
    event.preventDefault()
 
    Swal.fire({
      icon: 'success',
      title: 'Cartão adicionado!',
      confirmButtonColor:'#42d3ff',
      color: '#e8e8e8',
      background: '#323238'
    })
  }
}