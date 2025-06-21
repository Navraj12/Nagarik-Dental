const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors())
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend is connected" });

})

app.listen(4000, () => console.log('server is running on port 4000'))