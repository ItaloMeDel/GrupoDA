const express = require("express");
const app = express();

const PORT = 3001;

const users = [
  { name: "Osvaldo", rol: "Guitarrista", likes: ["heavy", "rock", "death"] },
  { name: "Ricardo", rol: "Vocalista", likes: ["hard", "grindcore", "heavy"] },
  { name: "Rowek", rol: "Baterista", likes: ["Trash", "heavy"] },
  { name: "Tony", rol: "Extra", likes: ["DeathM", "Black", "Heavy"] },
  { name: "Cabral", role: "Vocaliste", likes: ["Trash", "Rock", "Heavy"] }
];

app.use(express.json()); 

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/user/:name", (req, res) => {
  const name = req.params.name;
  const user = users.find(user => user.name === name);

  if (user) {
    res.json(user); 
  } else {
    res.status(404).json({ error: `No existe el usuario ${name}` });
  }
});

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  if (!newUser.name || !newUser.rol || !newUser.likes) {
    return res.status(400).json({ error: "Faltan datos necesarios para crear el usuario" });
  }
  users.push(newUser); 
  res.status(201).json(newUser); 
});

app.put("/api/user/:name", (req, res) => {
  const name = req.params.name;
  const updatedData = req.body; 
  const user = users.find(user => user.name === name);

  if (user) {
    user.rol = updatedData.rol || user.rol;  
    user.likes = updatedData.likes || user.likes; 
    res.json(user);  
  } else {
    res.status(404).json({ error: `No existe el usuario ${name}` });
  }
});

app.delete("/api/user/:name", (req, res) => {
  const name = req.params.name;
  const userIndex = users.findIndex(user => user.name === name);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);  
    res.status(204).send();  
  } else {
    res.status(404).json({ error: `No existe el usuario ${name}` });
  }
});

app.listen(PORT, () => {
  console.log(`Corriendo server en http://localhost:${PORT}/`);
});
