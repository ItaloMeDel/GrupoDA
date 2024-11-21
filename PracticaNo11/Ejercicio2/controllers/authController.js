const { generateToken } = require('../utils/jwtUtils');

const login = (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        const token = generateToken({ username });
        return res.json({ token });
    }

    res.status(401).json({ message: 'Credenciales inválidas' });
};

module.exports = { login };
