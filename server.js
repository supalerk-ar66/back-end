const express = require('express');
const { release } = require('os');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 4000;

// place holder for the data
const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];

app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {   //เรียกใช้ฟังชั่น
  console.log('api/users called!') //คำสั่ง ปริ้นค่าตัวแปร หรือ ดีบัค
  res.json(users); //  ให้รีเทนแบบ เจสัน 
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  //res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});