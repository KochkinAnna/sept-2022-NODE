const fs = require('node:fs/promises');
const path = require('node:path');

// const express = require('express');
//
// const app = express();
//
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


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
        console.log(users);
    } catch (e) {
        console.error(e.message)
    }
}

userMaker();

