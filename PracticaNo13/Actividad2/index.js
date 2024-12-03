var admin = require("firebase-admin");
var serviceAccount = require("./ClaveAcceso.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://proyectofinal-a5969-default-rtdb.firebaseio.com/"
});

var db = admin.database();
var ref = db.ref("server/data");
var usersRef = ref.child("nodejs");
usersRef.set({
  usuarios: {
    name: "carlos reyes",
    age: 28,
    salary: 2304.54
  }
});