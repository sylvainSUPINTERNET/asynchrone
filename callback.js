"use strict";


let clientData = {
    firstname: "sylvain", 
    lastname: "joly",
    age: 22
}



function registerUser(clientData, callback, callback2){
    let err = true;
    let data = {};


    if(clientData.firstname && clientData.lastname && clientData.age){
        err = false;
        data = clientData;
        callback(err,data)
    } else {
        err = true,
        data = "Error is occured"
        callback(err,data);
    } 
}


registerUser(clientData, function(err,data){
    if(err){
        console.log(err);
        console.log(data);
        return data;
    } else {
        console.log(err);
        console.log(data);
        return data;
    } 
})

