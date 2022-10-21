export default function initSecurityCode() {
  const securityCode = document.querySelector("#security-code")
  const securityCodePattern = {
    mask: "0000",
  }

  const securityCodeMasked = IMask(securityCode, securityCodePattern)

  securityCodeMasked.on("accept", () => {
    updateSecurityCode(securityCodeMasked.value)
  })

  function updateSecurityCode(code) {
    const ccSecurity = document.querySelector(".cc-security .value")
    ccSecurity.innerText = code === "" ? "123" : code
  }
}