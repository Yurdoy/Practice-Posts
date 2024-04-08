const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

const titleBox = document.querySelector('.post h1')
const textBox = document.querySelector('.post p')
const postBox = document.querySelector('.post')

const API_URL = 'https://jsonplaceholder.typicode.com'
let currentPostId = 1

const createErrorBox = (message) => {
    const errorBox = document.createElement('div')
    errorBox.className = 'error'
    errorBox.textContent = message
    return errorBox   
}

const createLoader = () => {
    const loader = document.createElement('div')
    const loaderIcon = document.createElement('i')
    loader.className = 'loader'
    loaderIcon.className = 'bx bx-loader-alt loader-icon'
    loader.append(loaderIcon)
    return loader
}

const preloadPost = () => {
    const loader = createLoader()
    postBox.append = createLoader()
    postBox.append(loader)
    document.querySelector('.post .error')?.remove()
    titleBox.textContent = ''
    textBox.textContent = ''
    return loader
}
const getPostDetails = async (id) => {
    const loader = preloadPost()
    try {
    const response = await fetch(`${API_URL}/posts/${id}`)
    if (!response.ok) throw new Error('Unable to load post')
    const data = await response.json()
    return data
    }
    catch(err) {
        console.error(err)
        const errorBox = document.createErrorBox(err.message)
        document.querySelector('.post').append(errorBox)
    }
    finally {
        loader.remove()
    }
}

const renderPost = async (id) => {
    const { title, body } = await getPostDetails(id)
    titleBox.textContent = title
    textBox.textContent = body
}

prevBtn.addEventListener('click', async () => {
    currentPostId--
    if (currentPostId <= 1) {
        prevBtn.disabled = true
    }
    renderPost(currentPostId)
})

nextBtn.addEventListener('click', async () => {
    currentPostId++
    if (currentPostId > 1) prevBtn.disabled = false
    renderPost(currentPostId)
})

renderPost(1)
