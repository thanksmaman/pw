window.addEventListener('load',async ()=>{
    const service = await navigator.serviceWorker.register('./worker.js')
    console.log('Service', service)
})

async function abonne(){
    const worker = await navigator.serviceWorker.ready
    const clientId = await  worker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BDp-8IlL0DeSILA7gBihD5w2MYsMXlMKzCmWu0VxWN2S5YoR2QbWSpl86TXv9Txu5HolldC9adK9ttXV7Q7Ihcg'
    })

    console.log(JSON.stringify(clientId))
}

async function abonnelikiptal(){
    const worker = await navigator.serviceWorker.ready
    const subscriber = await worker.pushManager.getSubscription();
    subscriber.unsubscribe();
}