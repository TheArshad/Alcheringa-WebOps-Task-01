let desh = document.querySelector('.ul')
let showBtn = document.querySelector('#drop-btn')
let upDown = document.querySelector('#up-down')
let display = 0;


function hideShow() {
    if (display === 1) {
        desh.style.display = 'block';
        dash.style.transitionDuration = "1s"
        display = 0;
    }
    else {
        desh.style.display = 'none';
        display = 1;
    }
}

showBtn.addEventListener("click", () => {
    if (display === 1) {
        desh.style.display = 'block';
        display = 0;
    }
    else {
        desh.style.display = 'none';
        display = 1;
    }
}
)

// fetching data
function createUserRow(values) {
    const row = document.createElement('tr');

    const fullNameCell = document.createElement('td');
    fullNameCell.textContent = values.firstName+" "+values.maidenName+" "+values.lastName;
    row.appendChild(fullNameCell);
    
    const usernameCell = document.createElement('td');
    usernameCell.textContent = values.username;
    row.appendChild(usernameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = values.email;
    row.appendChild(emailCell);

    
    const controlsCell = document.createElement('td');
    controlsCell.className = 'controls'

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    controlsCell.appendChild(editButton);
    row.appendChild(controlsCell);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => {
        row.remove();
    });
    controlsCell.appendChild(deleteButton);
    row.appendChild(controlsCell);

    return row;
}

async function populateUserTable() {

    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    const users =  data.users;
    const userTableBody = document.getElementById('table-body');
    users.forEach(user => {
        const userRow = createUserRow(user);
        userTableBody.appendChild(userRow);
    });
}

document.addEventListener('DOMContentLoaded', populateUserTable);


// ye ek nakamyab koshis thi meri ....

// // delte and Edit buttons 
// const edit =  `<button   style="background: rgb(3, 78, 252); 
//                               color: white;
//                               width:4vw;
//                               height:3vh;
//                               font-size:smaller">
//                               <i class="fa-regular fa-pen-to-square"></i>
//                               Edit</button>`



// // fetching data
// let url = "https://dummyjson.com/users"
// let tBody = document.querySelector('#table-body')

// async function getData() {
//     let responce = await fetch('https://dummyjson.com/users');
//     let data = await responce.json();

//     const dlt = `<button onclick=${remove(data)} style="background: rgb(252, 122, 3); 
//                             color: white;
//                             width:5vw;
//                             height:3vh;
//                             font-size:smaller">
//                             <i class="fa-regular fa-trash-can"></i>
//                             Delete</button>`

//     let tableData = "";
//     data.users.map((values) => {
//         // tableData += `<p>${values.firstName}</p>`
//         tableData += `<tr>
//                         <td>${values.firstName+" "+values.maidenName+" "+values.lastName}</td>
//                         <td>${values.username}</td>
//                         <td>${values.email}</td>
//                         <td>
//                             ${edit}
//                             ${dlt}
//                         </td>
//                     </tr>`
//     })
//     tBody.innerHTML = tableData

    
// }
// getData();

// // functioning delete func
// function remove (data) {
//     console.log(data.users[0].id)
// }