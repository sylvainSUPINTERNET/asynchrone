'use strict';


function validation(resolve, reject){
    let nb = Math.floor(Math.random() * Math.floor(10));
    if(nb > 5) {
        resolve(
            "validation réussité !"
        )
    } else {
        reject(
            new Error("Validation raté")
        )
    }
}



let promise1 = new Promise(function(resolve, reject){    
    setTimeout(() => validation(resolve, reject), 2000);    
    setTimeout(() => validation(resolve, reject), 2000);    
    setTimeout(() => validation(resolve, reject), 2000);      
}).then(function(data){
    console.log("data -> ", data)
})
.catch(err => console.log("error -> ", err))