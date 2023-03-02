const fs = require('node:fs/promises');
const path = require('node:path');
const {usersValidator} = require('./validators/usersValidator')

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const userMaker = async () => {
    try {
        const users = [
            {
                name: 'Anya',
                age: 22,
                gender: 'female'
            },
            {
                name: 'Max',
                age: 25,
                gender: 'male'
            },
            {
                name: 'Olya',
                age: 26,
                gender: 'female'
            },
            {
                name: 'Vasya',
                age: 22,
                gender: 'male'
            },
            {
                name: 'Cocosyc',
                age: 2,
                gender: 'male'
            },
        ]
        await fs.writeFile(path.join(process.cwd(), 'users.json'), JSON.stringify(users));
    } catch (e) {
        console.error(e.message)
    }
}

userMaker();

const validatorsMaker = async () => {
    try {
        await fs.mkdir(path.join(process.cwd(), 'validators'), {recursive: true});
        await fs.writeFile(path.join('validators', 'usersValidator.js'), '');

    } catch (e) {
        console.error(e.message)
    }
}

validatorsMaker();


//---------------------

const PORT = 5100;

app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}`);
});

app.get('/users', async (req, res) => {
    const users = await fs.readFile(path.join(process.cwd(), 'users.json'));
    res.status(200).json(users.toString());
})

app.get('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const users = await fs.readFile(path.join(process.cwd(), 'users.json'));
    const user = users[+userId];

    res.status(200).json(user.toString());
})

//


app.post('/users', async (req, res) => {

    const {error} = usersValidator(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }

    const body = req.body;
    let users = await fs.readFile(path.join(process.cwd(), 'users.json'), (err) => {
        if (err) throw new Error();
    })
    users = JSON.parse(users);

    const userExists = users.find(user => user.id === body.id);
    if (userExists) {
        return res.status(400).json({message: `User with id ${body.id} already exists`})
    }

    users.push(body);
    await fs.writeFile(path.join(process.cwd(), 'users.json'), JSON.stringify(users), (err) => {
        if (err) throw new Error();
    })

    res.status(201).json({message: 'User created'})
});

