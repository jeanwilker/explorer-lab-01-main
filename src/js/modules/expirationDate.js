export default function initExpirationDate() {
  const expirationDate = document.querySelector("#expiration-date")
  const expirationDatePattern = {
    mask: "MM{/}YY",
    blocks: {
      YY: {
        mask: IMask.MaskedRange,
        from: String(new Date().getFullYear()).slice(2),
        to: String(new Date().getFullYear() + 10).slice(2),
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
    },
  }

  const expirationDateMask = IMask(expirationDate, expirationDatePattern)

  expirationDateMask.on("accept", () => {
    updateExpirationDat(expirationDateMask.value)
  })

  function updateExpirationDat(date) {
    const ccExpiration = document.querySelector(".cc-expiration .value")
    ccExpiration.innerText = date === "" ? "02/32" : date
  }
}