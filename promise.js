'use strict';



//on peut traiter plusieurs promise d'un coup, grâce à Promise.all(promise1, ...2 etc).then bla bla

function validation(resolve, reject){
    let nb = Math.floor(Math.random() * Math.floor(10));
    if(nb > 5) {
        resolve(
            "validation réussité !"
        )
    } else {
        //Si on entre dans un reject, l'éxecution s'arrête
        reject(
            new Error("Validation raté")
        )
    }
}



let promise1 = new Promise(function(resolve, reject){    
    setTimeout(() => validation(resolve, reject), 2000);    
    setTimeout(() => validation(resolve, reject), 1000);    
})



promise1
    .then(function(data){
        console.log("data -> ", data)
    })
    .catch(err => console.log("error -> ", err))