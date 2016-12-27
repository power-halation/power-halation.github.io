{
  // initialize smooth-scroll
  smoothScroll.init()

  // set-up to click to enter
  const background = document.getElementById('top')
  const backgroundLogo = document.getElementById('top-logo')

  const toMain = () => {
    background.setAttribute('data-state', 'main')
  }

  backgroundLogo.addEventListener('mousedown', event => {
    toMain()
  })

  backgroundLogo.addEventListener('touchstart', event => {
    toMain()
  })

  // ...or, go to main by accessing url with hash
  if (location.hash !== '') {
    toMain()
    smoothScroll.animateScroll(document.querySelector(location.hash))
  }
}
