//----EVENTS--
//
// const event=require('node:events');
//
// const eventEmitter = new event();
//
// eventEmitter.on('click', (data)=>{
//     console.log(data);
//     console.log('Click, click,click');
// });
//
// eventEmitter.emit('click', {name:'Anton'});
// eventEmitter.emit('click', {name:'Anton'});
// eventEmitter.emit('click', {name:'Anton'});
//
// eventEmitter.once('clickAndDie',()=>{
//     console.log('Once');
// })
//
// console.log(eventEmitter.eventNames());
//
// eventEmitter.emit('clickAndDie');
// eventEmitter.emit('clickAndDie');
// eventEmitter.emit('clickAndDie');
//
// console.log(eventEmitter.eventNames());


//---STREAMS---

// const fs = require('node:fs');
// const path = require('node:path');
//

// read, write, duplex, transform - types of Streams

// const readStream = fs.createReadStream(path.join('test','text.txt'))
// const writeStream= fs.createWriteStream(path.join('test','text2.txt'))
//
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk)
// });
//
// const handleError = ()=>{
//     console.error('ERROR!!');
//     readStream.destroy();
//     writeStream.end('Error while reading file');
// }
//
// readStream
//     .on('error',handleError)
//     .pipe(writeStream);

//-----EXPRESS----

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    {
        name: 'Oleh',
        age: 19,
        gender: 'male'
    },
    {
        name: 'Anton',
        age: 22,
        gender: 'female'
    },
    {
        name: 'Anya',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Ielizavetta',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Cocos',
        age: 70,
        gender: 'mixed'
    }
]

app.get('/welcome', (req, res) => {
    res.send('Welcome');
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
})

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;

    const user = users[+userId];

    res.json(user);
})

app.post('/users', (req, res) => {
    const body = req.body;
    users.push(body)
    res.status(201).json({message: 'User created'})
});

app.put('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const updatedUser = req.body;

    users[+userId] = updatedUser;
    res.status(200).json({
        message:'User updated',
        data: users[+userId]
    })
});


// app.putch();


app.delete('/users/:userId', (req, res) => {
    const {userId} = req.params;

    users.splice(+userId,1);

    res.status(200).json({
        message:'User deleted'
    })
});


const PORT = 5100;

app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}`);
});




