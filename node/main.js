
const { log } = require('console');
const fs = require('fs');
const path = require('path')

const command = process.argv[2];
const fileName = process.argv[3];
const fileValue = process.argv[4];
const ourPath = path.join(__dirname, "mern")

switch (command) {
    case "write": {
        const isAvailable = fs.existsSync(ourPath);
        if (!isAvailable) {
            fs.mkdir(ourPath, (err) => {
                if (err) {
                    console.log("  folder crate fail", err);

                }
                else {
                    console.log("folder create done");

                }
            })
        }
        //   ----- create file path

        const customFilename = path.join(ourPath, `${fileName}.txt`)

        // ----- creat a file

        fs.writeFile(customFilename, fileValue, (err) => {
            if (err) {
                console.log("error from create" + customFilename);
            }
            else {
                console.log(`${customFilename} create sucesfully`)
            }
        })


        break;

    }
    case "read": {
        const targerPath = path.join(ourPath, `${fileName}.txt`)
        const existinfile = fs.existsSync(targerPath);
        if (existinfile) {
            fs.readFile(targerPath, "utf-8", (err, data) => {
                if (err) {
                    console.log(err);

                }
                else {
                    console.log(data);

                }
            })
        }
        else{
            console.log('file is not found try agaain')
        }


        break;

    }
    case "list": {
        const targerPath = path.join(ourPath)
        const existinfile = fs.existsSync(targerPath);
        if(existinfile){
            fs.readdir(targerPath, (err, file)=>{
                if(err){
                    console.log('err from list', err)
                }
                else{
                    file.forEach((item, idx)=>{
                        console.log(`No: ${idx} ----> file: ${item}`)
                    })
                }
            })
        }
        else{
            console.log("list is not found");
            
        }

        break;

    }
    case "remove": {

         const targerPath = path.join(ourPath, `${fileName}.txt`.trim())
        const existinfile = fs.existsSync(targerPath);
        if(existinfile){
            fs.unlink(targerPath , (err)=>{
                if(err){
                    console.log(" err from file exsit", err)
                }
                else{
                    console.log(`${fileName}.txt file remove sucessfully`)
                }
            })
        }
        else{
            console.log("not available")
        }
        break;

    }
    case "update": {

         const targerPath = path.join(ourPath, `${fileName}.txt`.trim())
        const existinfile = fs.existsSync(targerPath);
        if(existinfile){
            fs.writeFile(targerPath , fileValue, (err)=>{
                if(err){
                    console.log(" err from file update", err)
                }
                else{
                    console.log(`${fileName}.txt value upadate sucessfully`)
                }
            })
        }
        else{
            console.log("not available")
        }
        break;

    }
     case "addNew": {

         const targerPath = path.join(ourPath, `${fileName}.txt`.trim())
        const existinfile = fs.existsSync(targerPath);
        if(existinfile){
            fs.appendFile(targerPath , `\n${new Date().toLocaleDateString()} ${fileValue}`, (err)=>{
                if(err){
                    console.log(" err from file valu update", err)
                }
                else{
                    console.log(`${fileName}.txt value upadate sucessfully`)
                }
            })
        }
        else{
            console.log("not available")
        }
        break;

    }
     case "rename": {

         const targerPath = path.join(ourPath, `${fileName}.txt`.trim())
         const newTargerPath = path.join(ourPath, `${fileValue}.txt`.trim())
        const existinfile = fs.existsSync(targerPath);
        if(existinfile){
            fs.rename(targerPath , newTargerPath, (err)=>{
                if(err){
                    console.log(" err from file name update", err)
                }
                else{
                    console.log(`${fileName}.txt  upadate sucessfully`)
                }
            })
        }
        else{
            console.log("not available")
        }
        break;

    }
    default: {
        console.log('your comand is not match');

    }
}