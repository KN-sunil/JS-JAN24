//we cant use length property in objects
//if we want to check given object is empty or not we should use object.keys()
//method
//if we use object.keys() internally it converts objects into array and returns it

let box={id:101,}

if(Object.keys(box).length >0){
    console.log("Not Empty box")
}
else{
    console.log("Empty box")
} 
