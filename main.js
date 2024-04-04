const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

const title = document.querySelector('.post h1')
const next = document.querySelector('.post p')

const API_URL = 'https://jsonplaceholder.typicode.com'

const getPostDetails = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`)
}

prevBtn.addEventListener('click', () => {

})
nextBtn.addEventListener('click', () => {

})
