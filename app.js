const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join('mainFoulder'), (err)=>{
//     if (err) throw new Error();
// })
//
// fs.mkdir(path.join('mainFoulder', 'foulder1'), (err)=>{
//     if (err) throw new Error();
// })
//
// fs.mkdir(path.join('mainFoulder', 'foulder2'), (err)=>{
//     if(err) throw new Error();
// })
//
// fs.mkdir(path.join('mainFoulder', 'foulder3'), (err)=>{
//     if(err)throw new Error();
// })
//
// fs.mkdir(path.join('mainFoulder', 'foulder4'), (err)=>{
//     if(err) throw new Error();
// })
//
// fs.mkdir(path.join('mainFoulder', 'foulder5'), (err)=>{
//     if(err)throw new Error();
// })
//
// fs.writeFile(path.join('mainFoulder', 'file1'), 'Hello, I am file 1', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('mainFoulder', 'file2'), 'Hello, I am file 2', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('mainFoulder', 'file3'), 'Hello, I am file 3', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('mainFoulder', 'file4'), 'Hello, I am file 4', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('mainFoulder', 'file5'), 'Hello, I am file 5', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.unlink(path.join('mainFoulder', 'file1'), (err)=>{
//     if(err) throw new Error();
// })
//
// fs.unlink(path.join('mainFoulder', 'file2'),(err)=>{
//     if(err) throw new Error();
// })
//
// fs.unlink(path.join('mainFoulder', 'file3'), (err)=>{
//     if(err) throw new Error();
// })
//
// fs.unlink(path.join('mainFoulder', 'file4'), (err)=>{
//     if(err) throw new Error();
// })
//
// fs.unlink(path.join('mainFoulder', 'file5'), (err)=>{
//     if(err) throw new Error();
// })

// fs.writeFile(path.join('mainFoulder', 'file1.js'), 'Hello, I am file 1', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('mainFoulder', 'file2.js'), 'Hello, I am file 2', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('mainFoulder', 'file3.js'), 'Hello, I am file 3', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('mainFoulder', 'file4.js'), 'Hello, I am file 4', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('mainFoulder', 'file5.js'), 'Hello, I am file 5', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.stat(path.join('mainFoulder','foulder1'), (err, stats) => {
//     if (err) throw new Error();
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
// })

// fs.readdir(path.join('mainFoulder'), {withFileTypes:true},(err,data)=>{
//     if (err) throw new Error(err.message);
//     console.log(data);
//     data.forEach(file=>{
//         console.log(file.isFile());
//     })
// })


//---------ДЗ з превьюшки------

// fs.mkdir(path.join('Boys'), (err)=>{
//     if (err) throw new Error();
// })
//
// fs.mkdir(path.join('Girls'), (err)=>{
//     if (err) throw new Error();
// })

// fs.writeFile(path.join('Boys', 'Max.json'), '{name:Max, age:29, gender:male}', (err)=>{
//     if(err) throw new Error();
// })

// fs.writeFile(path.join('Boys', 'Anna.json'), '{name:Anna, age:27, gender:female}', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('Girls', 'Kokos.json'), '{name:Tom, age:5, gender:male}', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.writeFile(path.join('Girls', 'Inna.json'), '{name:Inna, age:27, gender:female}', (err)=>{
//     if(err) throw new Error();
// })

// fs.readFile(path.join('Boys','Anna.json'), (err, data) => {
//     if (err) throw new Error(err.message)
//     console.log(data.toString())
// })

// fs.rename(path.join('Boys', 'Anna.json'), path.join('Girls', 'Anna.json'), (err) => {
//     if (err) throw new Error(err.message)
// })

// fs.readFile(path.join('Girls','Kokos.json'), (err, data) => {
//     if (err) throw new Error(err.message)
//     console.log(data.toString())
// })
//
// fs.rename(path.join('Girls', 'Kokos.json'), path.join('Boys', 'Kokos.json'), (err) => {
//     if (err) throw new Error(err.message)
// })

// fs.writeFile(path.join('Boys','Kokos.json'), '{name:Kokos, age:5, gender:male}', (err)=>{
//     if(err) throw new Error();
// })
//
// fs.readFile(path.join('Boys','Kokos.json'), (err, data)=>{
//     if(err) throw new Error(err.message);
//     console.log(data.toString());
// })