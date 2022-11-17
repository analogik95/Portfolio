/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => { // tc = tabContent//
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(tab => {
            tab.classList.remove('filters__active')
        })
        tab.classList.add('filters__active')
    })
})
    
  
    




/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
