// todo list

let theList = [
    {
        theTask: `drink water and eat`
    },
    {
        theTask: `let_the_chickens_and_dogs_out`
    },
    {
        theTask: `feed_the_animals`
    },
    {
        theTask: `tend_to_the_land`
    },
    {
        theTask: `workout_and_walk_dogs`
    },
    {
        theTask: `shower_and_clean`
    },
    {
        theTask: `eat_lunch_and_hydrate`
    },
    {
        theTask: `paint`
    },
    {
        theTask: `tend_to_the_garden`
    },
    {
        theTask: `prepare_dinner`
    },
    {
        theTask: `eat_with_family`
    },
    {
        theTask: `clean_up_the_house`
    },
    {
        theTask: `last_check_on_land`
    },
    {
        theTask: `let_chickens_back_in`
    }
]

let completedTaskList = []

// for='' connected to ID
theMainList = () => {
for (let i = 0; i < theList.length; i++) {
    document.getElementById("toDoList").innerHTML += `<input type= 'checkbox' value=${theList[i].theTask} name= 'moveMe' id= 'checkboxClick' onclick= 'pushOut()'> <label for='checkboxClick'>${theList[i].theTask}</label><br>`
 }
}
theMainList()

theCompletedTasks = () => {
    for (let i = 0; i < completedTaskList.length; i++) {
        if (document.getElementById("checkboxClick").checked)
            document.getElementById("completedTasks").innerHTML += `<input type= 'checkbox' id= 'checkboxClick' onclick= 'pushOut()'> ${completedTaskList[i].doneToDo} <br>`,
                `<input type= 'checkbox' id= 'checkboxClick' onclick= 'pushOut()'> ${completedTaskList[i].doneNewTasks} <br>`
    }
}

pushOut = () => {
    let movingMe = document.getElementsByName('moveMe')
    for (let i = 0; i < movingMe.length; i++) {
        if (movingMe[i].checked) {
            document.getElementById('completedTasks').innerHTML += movingMe[i].value

        }
        // completedTaskList[0].push(`${theList[i].theTask}`)
        // completedTaskList[1].push(`${document.getElementById("inputNewItem").value}`)
    }
}

// check = () => {
//     for (let i = 0; i < theList.length; i++) {
//     if (document.getElementById("checkboxClick")) {
//         document.getElementById("completedTasks").innerHTML += `<input type= 'checkbox' id= 'checkboxClick' > ${(theList[i].theTask)} <br>`
//             }
//             // else? if (document.getElementById("checkboxClick").checked = false){}

//             }
//         }

// enter new task
enterNewItem = () => {
    if (document.getElementById("inputNewItem").value) {
        document.getElementById("newItems").innerHTML += `<input type= 'checkbox' id= 'checkboxClick' onclick= 'pushOut()'> ${document.getElementById("inputNewItem").value} <br>`
    }
}
enterNewItem()

// document.getElementById("toDoList").innerHTML
// document.getElementById("newItems").innerHTML
// document.getElementById("inputNewItem").value
// document.getElementById("completedTasks").innerHTML

// document.getElementById('completedTasks').innerHTML += document.getElementById("inputNewItem").value

// document.getElementById("checkboxClick").checked = true; // Check
// document.getElementById("checkboxClick").checked = false;// Uncheck