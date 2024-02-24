let employees=[ {id:101,name:"sunil",salary:45000},
{id:102,name:"anil",salary:55000}]



let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true
            if(flag==true){
                resolve("data inserted")
                employees.push(emp)
            }
            else{
                reject("data not inserted")
            }
        },4000)

    })
}

let getemployee=()=>{
    setTimeout(()=>{
        let rows=""
        employees.forEach((emp)=>{
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>                
            <td>${emp.salary}</td>                
          </tr>`
           })
          document.getElementById("abc").innerHTML=rows;
        },2000)  
}
let run=async ()=>{
    await createEmployee({id:103,name:"sumit",salary:65000}) 
    getemployee()
}    
run()
l