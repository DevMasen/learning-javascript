//! SabzLearn 
// var todosArray = [
//     { id: 1, title: 'learn js', isDoing: false },
//     { id: 2, title: 'make footer', isDoing: true },
//     { id: 3, title: 'design', isDoing: false },
//     { id: 4, title: 'vue js', isDoing: false },
// ]

// var userMenu = prompt('Choose one of them: \n 1. Add Todo \n 2. Remove Todo \n 3. Do Todo')

// if (userMenu === '1') {
//     // alert('Add')
//     var newTodoName = prompt('Enter The New Todo Name: ', '')
//     var newTodoObject = {
//         id: todosArray.length + 1,
//         title: newTodoName,
//         isDoing: false
//     }
//     todosArray.push(newTodoObject)
//     console.log("Todos Array: ", todosArray)
    
// } else if (userMenu === '2') {
//     // alert('Remove')
//     var removeTodoName = prompt('Enter The Removable Todo Name: ', '')
//     var removableTodoIndex = todosArray.findIndex(function (todo) {
//         return todo.title === removeTodoName
//     })
//     todosArray.splice(removableTodoIndex, 1)
//     console.log("Todos Array: ", todosArray)
    
// } else if (userMenu === '3') {
//     // alert('Doing')
//     var editableTodoName = prompt('Enter The Editable Todo Name: ', '')
//     todosArray.forEach(function (todo) {
//         // Codes
//         // console.log(todo)
//         if (todo.title === editableTodoName) {
//             todo.isDoing = true
//         }
//     })   
//     console.log("Todos Array: ", todosArray) 
// } else {
//     alert('گزینه وارد شده معتبر نمی باشد')
// }

//? Exercise: یک پروژه تسک منیجمنت پیاده سازی کنید
//? در این سامانه مدیر می تواند به کارمندان خود تسک های مختلفی بدهد
//? به عنوان مثال می تواند به آقای محمد وظیفه خاصی را اعمال کند
//? یک ساختار داشته باشید که داخل آن 4 کارمند موجود بوده و هر کارمند وظایفی را بر عهده داشته باشند
//? سپس از کاربر (مدیر) اسم یک تسک را دریافت کرده و همچنین اسم کارمندی را که قصد اضافه کردن تسک به آن دارد
//? دریافت کنید
//? و سپس تسک مورد نظر مدیر را به کارمند مورد نظرش اضافه کرده و لیست را در کنسول نمایش دهید

//* Answer:
function setEmployee(id=0, empName="", empTasks=[]){
    return{
        id,
        empName,
        empTasks,
    }
}

let employeeList = [
    setEmployee(0, "Masen"),
    setEmployee(1, "Mahdi"),
    setEmployee(2, "Yasin"),
    setEmployee(3, "Sina"),
    setEmployee(4, "Amirali"),
]
let managerTask="";
let employeeName="";
let employeeFound = false;

while(true){
    managerTask = prompt("Enter Task: ","");
    if(managerTask === null){
        console.clear();
        console.log(employeeList);
        break;
    } else if (managerTask.length < 3){
        alert("Invalid Task!");
        continue;
    } else {
        employeeName = prompt("Enter Employee Name: ","");
        if(employeeName === null){
            console.clear();
            console.log(employeeList);
            break;
        } else {
            employeeList.forEach(function(emp){
                if(emp.empName.toLowerCase() === employeeName.toLowerCase()){
                    employeeFound = true;
                    emp.empTasks.push(managerTask);
                }
            })
            if(employeeFound){
                alert(`Task Added To ${employeeName} successfully!`)
                console.clear();
                employeeList.forEach(function(emp){
                    console.log(`ID:${emp.id}\nName:${emp.empName}\nTasks:  `);
                    emp.empTasks.forEach(function(task,ind){
                        console.log("   "+(ind+1) +": "+task);
                    })
                })
                continue;
            } else {
                alert("Employee NOT Found!");
                continue;
            }
        }
    }
}

//! SabzLearn End