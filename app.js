const counter = document.getElementById('counter')
const container = document.querySelector('.container')
let currentNumber

counter.addEventListener('click', () => {
    currentNumber = counter.textContent
    counter.textContent = parseInt(currentNumber) + 1

    // Notification on count change
    if(parseInt(counter.textContent) === 10) {
        notification(10)
    } else if(parseInt(counter.textContent) === 20) {
        notification(20)
    }
})

// Notification function - Show & Close the notification
function notification(count) {
    Notification
    .requestPermission()
    .then(permission => {
        if(permission === 'granted') {
            const noti = new Notification(`${count}`, {
                body: `Count is ${count} now`
            })

            setTimeout(() => {
                noti.close()
            }, 3000);
        }
    })
}



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



// Notification with a button trigger

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