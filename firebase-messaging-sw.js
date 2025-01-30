
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
   apiKey: "AIzaSyBCPx5HEZUS_DDUBjHADLu3p4sBgymAJe8",
    authDomain: "awaed-26bf8.firebaseapp.com",
       projectId: "awaed-26bf8",
       storageBucket: "awaed-26bf8.appspot.com",
       messagingSenderId: "196918066470",
       appId: "1:196918066470:web:055f930ba3debcdd6e95e7",
       measurementId: "G-EQ71P7CR23"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
