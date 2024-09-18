export const helloMsg = (element) => {
    element.innerHTML = "Hello"
    element.addEventListener('click', () => alert("hello"))
}

export const goodBye = (element) => {
    element.innerHTML = "Bye"
    element.addEventListener('click', () => alert("Goood Bye"))
}

export default helloMsg