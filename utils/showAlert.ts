export default (alert: HTMLElement|null) => {
  if (alert) {
    alert.style.display = 'block'
    alert.style.visibility = 'visible'
    alert.style.opacity = '1'
    setTimeout(() => {
      alert.style.visibility = 'hidden'
      alert.style.opacity = '0'
      alert.style.display = 'none'
    }, 3000)
  }
}