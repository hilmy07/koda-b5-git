// koda-b5-git

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function ask(q) {
    return new Promise(resolve => rl.question(q, resolve));
}

const validCreds = [
    {
        username: "andi", password: "root",
    },
    {
        username: "cindy", password: "r00t"
    },
]

// let n=0;

async function login() {
    // rl.close();
    for(let temp = 1; temp<= 3; temp++){
        let username = await ask("Masukkan username : ");
        let password = await ask("Masukkan password : ");

        if(validCreds[0].username == username && validCreds[0].password == password) {
            console.log("valid")
            rl.close();
            break;
        } else if(validCreds[1].username == username && validCreds[1].password == password) {
            console.log("valid")
            rl.close();
            break;
        } else {
            // if(temp<4){
            console.log("not valid")
            login();
            break;
            rl.close();
            // } else {
            // }
        }
    }
        // console.log(temp);
    // }
}

login();