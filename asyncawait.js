'use strict';



// Rappel
// await peut être utilisé que dans une fonction async
// la method dans await doit être une promise.


/*
//async veut dire que le retour de la method est forcemment une promise
async function test(){
    return 1;
}

// test === test 2 cela est exactement la même chose.
async function test2() {
    return Promise.resolve(1);
  }

test()
    .then(function(data){
        console.log(data);
    })
    .catch(err => console.log(err))


// le mot clé await fonctionne uniquement dans une method async

*/



async function f() {

    let myPromise1 = Promise.resolve(1)
    let myValue = "ok";
    //let myPromise2 = Promise.reject("NON.")

        //multiple promise.
        //si juste une valeur, alone on la store dans une const le await method puis on return la const
         let [foo, bar] = await Promise.all([myPromise1, myValue, /*myPromise2*/]);

        return [foo, bar];
  }


  f()
    .then(function(results){
        console.log("resultat ", results)
    })
    .catch(function(err){
        console.log("err ", err)
    })

  
