export const getBooks = () => {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyCdkWy0fAMqhV28dJk5h2CMCTQ3jRHP_J4').then(
        res => res.json()
      )
}

export const searchBooksByTerm = (searchTerm: string) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyCdkWy0fAMqhV28dJk5h2CMCTQ3jRHP_J4`).then(
    res => res.json()
  )
}