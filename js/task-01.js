const ulEl = document.querySelector('#categories');
const ulChild = ulEl.children.length;
console.log('Number of categories:', ulChild)

const firstLi = ulEl.children[0]
const titleFirstLi = firstLi.querySelector('h2')
console.log('Category:', titleFirstLi.textContent)
const firstLiСategoryEl = firstLi.querySelectorAll('li');
console.log('Elements:', firstLiСategoryEl.length)

const secondLi = ulEl.children[1]
const titleSecondLi = secondLi.querySelector('h2')
console.log('Category:', titleSecondLi.textContent)
const secondLiСategoryEl = secondLi.querySelectorAll('li');
console.log('Elements:', secondLiСategoryEl.length)

const thirdLi = ulEl.children[2]
const titleThirdLi = thirdLi.querySelector('h2')
console.log('Category:', titleThirdLi.textContent)
const thirdLiСategoryEl = thirdLi.querySelectorAll('li');
console.log('Elements:', thirdLiСategoryEl.length)


