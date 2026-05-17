import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  push
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

  apiKey: "AIzaSyByRFJMm2xnoDG9xKX1P0PldOd1EkLnEJo",

  authDomain: "myapp2-2000.firebaseapp.com",

  databaseURL: "https://myapp2-2000-default-rtdb.firebaseio.com",

  projectId: "myapp2-2000",

  storageBucket: "myapp2-2000.firebasestorage.app"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

window.saveMessage = function () {

  const input = document.getElementById("messageInput");

  const status = document.getElementById("status");

  const message = input.value.trim();

  if (message === "") {
    status.innerText = "اكتب رسالة أولاً";
    return;
  }

  push(ref(database, "messages"), {
    text: message,
    createdAt: Date.now()
  })
  .then(() => {

    status.innerText = "تم حفظ الرسالة بنجاح ✅";

    input.value = "";
  })
  .catch((error) => {

    status.innerText = "خطأ: " + error.message;
  });
};