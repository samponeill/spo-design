window.onload = function() {
  const headerEl = document.querySelector('header.grid-header.shadow')
  const sentinalEl = document.querySelector('.hero-banner')
  
  const handler = (entries) => {
    console.log(entries)
    // entries is an array of observed dom nodes
    // we're only interested in the first one at [0]
    // because that's our .sentinal node.
    // Here observe whether or not that node is in the viewport
    if (!entries[0].isIntersecting) {
      headerEl.classList.add('enabled')
    } else {
      headerEl.classList.remove('enabled')
    }
  }
  
  // create the observer
  const observer = new window.IntersectionObserver(handler)
  // give the observer some dom nodes to keep an eye on
  observer.observe(sentinalEl)

}