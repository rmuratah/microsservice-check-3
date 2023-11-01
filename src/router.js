const express = require('express')

const router = express.Router();

router.get('/vet', (req, res) => res.status(200).send("Teste Router"));

module.exports = router