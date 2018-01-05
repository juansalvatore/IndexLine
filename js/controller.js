let index = 1

function previous() {
  index--
  switch (index) {
    case 0:
      index++
      break
    case 1:
      progress = 0
      $('.one').removeClass('finished')
      $('.two').removeClass('active')
      break
    case 2:
      progress = 25
      $('.two').removeClass('finished')
      $('.three').removeClass('active')
      break
    case 3:
      progress = 45
      $('.three').removeClass('finished')
      $('.four').removeClass('active')
      break
    case 4:
      progress = 60
      $('.four').removeClass('finished')
      $('.five').removeClass('active')
      break
    default:
      $('.five').removeClass('finished')
      $('.six').removeClass('active')
      progress = 80
  }

  document
    .getElementById('progress')
    .setAttribute('style', 'width:' + progress + '%')
  console.log(index)
}

function next() {
  let progress = 0
  switch (index) {
    case 1:
      progress = 25
      $('.one').addClass('finished')
      $('.two').addClass('active')
      break
    case 2:
      progress = 45
      $('.two').addClass('finished')
      $('.three').addClass('active')
      break
    case 3:
      progress = 60
      $('.three').addClass('finished')
      $('.four').addClass('active')
      break
    case 4:
      progress = 80
      $('.four').addClass('finished')
      $('.five').addClass('active')
      break
    default:
      progress = 100
      $('.five').addClass('finished')
      $('.six').addClass('active')
      index = 5
      break
  }

  document
    .getElementById('progress')
    .setAttribute('style', 'width:' + progress + '%')
  index++
  console.log(index)
}

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className)
  else if (!hasClass(el, className)) el.className += ' ' + className
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className = el.className.replace(reg, ' ')
  }
}
