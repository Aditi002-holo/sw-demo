const counter = document.getElementById('counter')
let currentNumber

counter.addEventListener('click', () => {
    console.log(counter.textContent)
    currentNumber = counter.textContent
    counter.textContent = parseInt(currentNumber) + 1
})

// Register the cache
if('serviceWorker' in navigator) {
    console.log('Service Worker supported')
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./sw-cached-pages.js')
            .then(reg => console.log('SW: registered'))
            .catch(err => console.log(`sw: error - ${err}`))
    })
}

// Notification with button

const notifBtn = document.getElementById('notif-btn')

notifBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(permission => {
            if(permission === 'granted') {
                new Notification("Example Notification", {
                    body: 'Test Notification',
                    data: {restimer: 'yee!'},
                    icon: './file-code-solid.svg',
                })
            }
        })
})