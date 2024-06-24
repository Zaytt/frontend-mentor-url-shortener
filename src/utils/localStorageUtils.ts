export const setUserLocalStorage = (userId) => {
  localStorage.setItem('userId', userId)
}

export const getUserLocalStorage = () => {
  return localStorage.getItem('userId')
}
