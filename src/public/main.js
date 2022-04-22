const PUBLIC_VAPID_KEY = 'BGla2LL5Aq-UQ2Xl6IQL2t2xZR4hU9LvwBHRo5ylnT5vxPiCp-RSboc3-IhCHOgR0Zw-AP3CFld4sOJjBqEWVFU';
 
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

const subscription = async ()=>{ 
    //SERVICE WORKER REGISTRATION
  const register = await  navigator.serviceWorker.register('/worker.js',{
        scope: '/'
    });
    console.log('new service worker');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    }); 
    await fetch('/subscription',{
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type":"application/json"
        }
    });
console.log('subscribed!');
}

const form = document.querySelector('#myform');
 const message =  document.querySelector('#message');
 console.log(message.value);

 form.addEventListener('submit', e=>{
   e.preventDefault();
   fetch('/new-message',{
     method:"POST",
     body: JSON.stringify({
       message:message.value
     }),
     headers: {
       "Content-Type":"application/json"
     }
   });
   form.reset();
 })
subscription();