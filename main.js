const app = document.querySelector('#app')

const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2000));

const renderLoading = () => {
  app.setAttribute("aria-busy","true")
}

const stopLoading = () => {
  app.removeAttribute("aria-busy")
}

const renderData = ({title, body}) => {
  app.innerHTML = `
    <h1>${title}</h1>
    <p>${body}</p>
  `
}

const renderError = (msg) => {
  app.innerHTML = `
    <h1>${msg}</h1>
  `
}

const getData = async(url = '') => {
  try {
    if(!url) throw new Error('No se ha especificado una URL 😭')
    renderLoading()
    await fakePromise()
    const response = await fetch(url)
    if(!response.ok) throw new Error('Error al consumir la API 😭')
    const data = await response.json()
    renderData(data)
  } catch (error) {
    renderError(error.message)
  } finally {
    stopLoading()
  }
}

getData("https://jsonplaceholder.typicode.com/posts/1")