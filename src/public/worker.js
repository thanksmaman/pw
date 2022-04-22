console.log('service worker');

self.addEventListener('push', e =>{
    const data = e.data.json()
    console.log(data)
    this.registration.showNotification(data.title, {
        body:data.message,
        icon:'./1.jpg'
    })
})