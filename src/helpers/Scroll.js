export function scrollTo (elementID, delay = null, behavior = 'smooth') {
  if (typeof window === 'undefined') {
    // console.log("no window");
    return
  }

  const element = document.getElementById(elementID)

  console.log(element)

  window.requestAnimationFrame(() => {
    let offset = element.offsetTop
    try {
      const bodyRect = document.body.getBoundingClientRect()
      const bodyStyle = window.getComputedStyle(document.body, null)

      // need to handle the padding for the top of the body
      const paddingTop = parseFloat(bodyStyle.getPropertyValue('padding-top'))

      const elementRect = element.getBoundingClientRect()
      offset = elementRect.top - paddingTop - bodyRect.top
    } catch (err) {
      console.log('oh noes!')
    }

    if (delay) {
      setTimeout(() => {
        window.scrollTo({ top: offset, left: 0, behavior })
      }, delay)
    } else {
      window.scrollTo({ top: offset, left: 0, behavior })
    }
  })
}
