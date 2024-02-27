const counter = document.getElementById('counter')
let currentNumber

counter.addEventListener('click', () => {
    console.log(counter.textContent)
    currentNumber = counter.textContent
    counter.textContent = parseInt(currentNumber) + 1
})

// Register the cache