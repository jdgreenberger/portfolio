var active = false

function addPopupActive () {
  active = !active
  if (active) {
    document.getElementById('popup').className += '.active'
  } else {
    console.log(document.getElementById('popup').className)
    document.getElementById('popup').className = 'popup'
  }
}
