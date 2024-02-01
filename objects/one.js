//objects-holds group of key value pairs of one entity

//create

/* let emp={
    id:101,
    name:"rahul",
    sal:45000,
    loc:"banglore",
} */


//to read object


//console.log(emp)


// to read object properties or values
/* 
console.log(emp.id)
console.log(emp.name)
console.log(emp.name)
console.log(emp.loc) */

//to update
/* let emp={
    id:101,
    name:"rahul",
    sal:45000,
    loc:"banglore",
}
emp.name="rahul gandhi"

console.log(emp.name) */

//duplicates are not allowed in objects

/* let emp={
    id:101,
    name:"rahul",
    id:102,
    sal:45000,
    loc:"banglore",
    loc:"chennai",
}

console.log(emp) */

//instead of hard coding to read properties we use for(  in)
/* 
let empdetails={
    id:101,
    name:"sunil",
    email:"sunil123@gmail.com",
    sal:40000,
    loc:"kochi",

}
for(details in empdetails){
    console.log(details)
} */
 
/* 
let product={
    pid:'p101',
    pname:"Iphone 18",
    price:18000,
    color:['Grey','Yellow','green']
}
for(prop in product){
    console.log(prop, ":", product[prop] )
}

console.log(product ['color'][2]);
 */

let users=[
    { id:101, name:"rahul",sal:45000},
    { id:102, name:"sonia",sal:55000},
    { id:103, name:"priyanka",sal:65000},
]

//print user id / names
/*  for(user of users){
    console.log(user.id)
} */
//iterating using for
for( var i=0; i<=users.length-1 ; i++){
    console.log(users[i].id)
}