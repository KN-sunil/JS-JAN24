//creating arrays

//var id=[101,102,103,104]

//duplicates are allowed
//names=["rahul","suni","sunil"]
//heterogeneous elements are allowed

/* var a=[10,20.5,"rahul",true,undefined ,{},[]]
//how to read
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6]) */

//how to update

//enames=["sunil","shan","rajesh","tarun"]
/* enames[1]="shan bor"
console.log(enames) */

//how to delete
/* enames.pop()
console.log(enames) */

//we can do using for loop
// let enames=['rahul','sonia','priya','modi','anu','dhoni','rajesh','madan']
/* for(let i=0;i<=7;i++){
    console.log(enames[i])
} */
//using while
/*let i=0
while(i<=7){
    console.log(enames[i])
    i++
} */

/* let enames=['rahul','sonia','priya','modi','swathi','dhoni','rajesh','madan']
let ids=[101,102,103,104]
let sizes=['s','m','l','xl','xxl'] */

//iterating array using for( of)-es6
/* 
for(ename of enames){
    console.log(ename)
} */

/* for(id of ids){
    console.log(id)
} */
/* 
for(l of sizes){
    console.log(l)
} */
//how to print/read array using length property
/* let users=[101,"rahul",true,{},10,1020,20]
console.log(users.length) */

//instead of hard coding for knowing sizes of array we use lenght property

/* let enames=["rahul","sonia","priyanka","modi"]

for (var i=0; i<=enames.length-1 ;i++){
console.log(enames[i])
} */

//how to find array empty

let id=[]
if (id.length>0){
    console.log("no not a empty")
}
else{
    console.log("empty")
}