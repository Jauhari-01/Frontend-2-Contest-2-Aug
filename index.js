//student object
const students = [
    // {
    //   ID: 1,
    //   name: 'Alice',
    //   age: 21,
    //   grade: 'A',
    //   degree: 'Btech',
    //   email: 'alice@example.com'
    // },
    // {
    //   ID: 2,
    //   name: 'Bob',
    //   age: 22,
    //   grade: 'B',
    //   degree: 'MBA',
    //   email: 'bob@example.com'
    // },
    // {
    //   ID: 3,
    //   name: 'Charlie',
    //   age: 20,
    //   grade: 'C',
    //   degree:'Arts',
    //   email: 'charlie@example.com'
    // }
  ]; 

//getting refrences for use
let form = document.getElementById("f");
let inputs = document.getElementsByTagName("input");
let table = document.getElementById("table");
let count = 0;


//fuctionallities
let obj = {
    ID: "",
    name: "",
    age: 0,
    gpa: 0,
    degree: 0,
    email: ""
}
function formSubmit(event){
    event.preventDefault();
    count++;
    obj = {
        ID: count,
        name: inputs[0].value,
        age: inputs[3].value,
        gpa: inputs[2].value,
        degree: inputs[4].value,
        email: inputs[1].value
    }
    students.push(obj);

    //adding in table
    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');
    td1.textContent = obj.ID;
    tr.appendChild(td1);
    
    let td2 = document.createElement('td');
    td2.textContent = obj.name;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = obj.age;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = obj.gpa;
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    td5.textContent = obj.degree;
    tr.appendChild(td5);
    
    table.appendChild(tr);
    
    


    console.log(students);
}

form.addEventListener('submit', formSubmit);
