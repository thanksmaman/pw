self.addEventListener('push',(e) =>{
    self.registration.showNotification('salam',{
        body: e.data.text(),
        icon:'./1.jpg',
        badge: './2.jpg',
        vibrate:[100,100,100],
        actions:[
            {
                "action":"close",title: 'Bye Bye', icon: './3.jpg'
            },
            {
                "action":"LookMessage",title: 'manage event', icon: 'https://cdn0.iconfinder.com/data/icons/scenarium-vol-19/128/019_029_eye_view_watch_show-128.png'
            }
        ]
    })
})
self.addEventListener('notificationclick',(event) =>{
    if(event.action === 'LookMessage'){
        event.notification.close();
        clients.openWindow('https://www.google.fr/')
    }
})