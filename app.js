const webpush = require('web-push');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = process.envi.PORT ||  300;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({extended: true}));

const vapikeys = {
    publicKey: 'BDp-8IlL0DeSILA7gBihD5w2MYsMXlMKzCmWu0VxWN2S5YoR2QbWSpl86TXv9Txu5HolldC9adK9ttXV7Q7Ihcg',
    privateKey: '8OF9UbsVXqtxpz5hJDfrAHYFytQTUCJ1heaQX4AwwtQ'
  }

  const subscribeClient={"endpoint":"https://fcm.googleapis.com/fcm/send/ehNJdsDM2j4:APA91bFb25JIH-Bcw7T155Jc78jTnUr-kXDpMx3vTKwq3fHTC4PoMqYwKk-b6AxaRFhA3-_p1TXvt30vw_RfiZDKs7PA_UvApOfvJlJDc6R-Q_N_zERUeRwX-izkA6ARL4a3B7zve2hr","expirationTime":null,"keys":{"p256dh":"BPbIxG1OMV3GIlRaSXGUbB55Y7QH-gWiX0gHKLwY5APpK0vxDmsQM4ZXJngbPnKyb1NKa_xJL3yzPQlHDz4GePg","auth":"1eS6gM27xjGryz9F8b5lOw"}}

webpush.setVapidDetails('mailto:enigmer224@gmail.com',vapikeys.publicKey,vapikeys.privateKey)
//webpush.sendNotification(subscribeClient,'Hey save, on dit quoi')

router.get('/',(req,res,nexe) =>{
  res.send('Hello World')
})
router.post('/webpush',(req,res,next) =>{
const {msg} = req.body;
webpush.sendNotification(subscribeClient,msg)
res.status(200).json({msg:"Envoyer avec success"})
})
app.use('/',router)
app.listen(port, ()=>{
  console.log("Server starting on "+port)
})
