// form handling and working with the forms
// handle backend procces of forms and making sure the data coming from any frontend library, framework, template engines we still handle it at the backend process

// session cookie
// hum log kuch bhi data frontend par browser par rakh skte hai and jab bhi aap kuch bhi request backend par kroge wy frontend par saved data automatically backend par chala jayega

const express = require('express');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// tumne to bhejta tha plain text par server ko mila blob which is not directly readable ab is cheej ko handle krna padega ki hum us blob ko wapas se readable kar sake

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})