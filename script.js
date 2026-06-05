// ===============================
// ELEMENTS
// ===============================

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

const close1 = document.querySelector(".close");
const close2 = document.querySelector(".close2");

const userProfile = document.getElementById("userProfile");
const userName = document.getElementById("userName");


// ===============================
// MODAL CONTROLS
// ===============================

if(loginBtn){
    loginBtn.onclick = () => {
        loginModal.style.display = "flex";
    };
}

if(signupBtn){
    signupBtn.onclick = () => {
        signupModal.style.display = "flex";
    };
}

if(close1){
    close1.onclick = () => {
        loginModal.style.display = "none";
    };
}

if(close2){
    close2.onclick = () => {
        signupModal.style.display = "none";
    };
}

window.onclick = (e) => {

    if(e.target === loginModal){
        loginModal.style.display = "none";
    }

    if(e.target === signupModal){
        signupModal.style.display = "none";
    }

};


// ===============================
// ACCOUNT CREATION
// ===============================

const signupButton =
document.querySelector("#signupModal button");

if(signupButton){

signupButton.addEventListener("click", () => {

    const name =
    document.querySelector(
    "#signupModal input[type='text']"
    ).value;

    const email =
    document.querySelector(
    "#signupModal input[type='email']"
    ).value;

    const password =
    document.querySelector(
    "#signupModal input[type='password']"
    ).value;

    if(
        name === "" ||
        email === "" ||
        password === ""
    ){
        alert("Please fill all fields");
        return;
    }

    const user = {
        name,
        email,
        password
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("🎉 Account Created Successfully!");

    updateUserUI(user);

    signupModal.style.display = "none";

});
}


// ===============================
// LOGIN
// ===============================

const loginButton =
document.querySelector("#loginModal button");

if(loginButton){

loginButton.addEventListener("click", () => {

    const email =
    document.querySelector(
    "#loginModal input[type='email']"
    ).value;

    const password =
    document.querySelector(
    "#loginModal input[type='password']"
    ).value;

    const savedUser =
    JSON.parse(
    localStorage.getItem("user")
    );

    if(
        savedUser &&
        email === savedUser.email &&
        password === savedUser.password
    ){

        alert(
        `Welcome Back ${savedUser.name} 👋`
        );

        updateUserUI(savedUser);

        loginModal.style.display = "none";

    }else{

        alert(
        "Invalid Email or Password"
        );

    }

});
}


// ===============================
// UPDATE USER INTERFACE
// ===============================

function updateUserUI(user){

    const welcome =
    document.getElementById("welcomeUser");

    if(welcome){
        welcome.innerHTML =
        `Welcome ${user.name} 👋`;
    }

    if(userName){
        userName.innerText =
        user.name;
    }

    if(userProfile){
        userProfile.style.display =
        "flex";
    }

    if(signupBtn){
        signupBtn.style.display =
        "none";
    }

    const resources =
    document.getElementById(
    "resources"
    );

    if(resources){
        resources.style.display =
        "block";
    }

}


// ===============================
// AUTO LOGIN
// ===============================

const savedUser =
JSON.parse(
localStorage.getItem("user")
);

if(savedUser){
    updateUserUI(savedUser);
}


// ===============================
// LOGOUT
// ===============================

if(userProfile){

userProfile.addEventListener(
"click",
() => {

    const logout =
    confirm(
    "Do you want to logout?"
    );

    if(logout){

        localStorage.removeItem(
        "user"
        );

        location.reload();
    }

});

}


// ===============================
// STUDY TIMER
// ===============================

let seconds = 1500;
let timerRunning = false;

function startTimer(){

    if(timerRunning){
        return;
    }

    timerRunning = true;

    const timer =
    setInterval(() => {

        let min =
        Math.floor(
        seconds / 60
        );

        let sec =
        seconds % 60;

        document.getElementById(
        "time"
        ).innerHTML =
        `${min}:${sec < 10 ? "0" : ""}${sec}`;

        seconds--;

        if(seconds < 0){

            clearInterval(timer);

            timerRunning = false;

            seconds = 1500;

            alert(
            "🎉 Study Session Complete!"
            );

            document.getElementById(
            "time"
            ).innerHTML =
            "25:00";
        }

    },1000);

}


// ===============================
// TODO LIST
// ===============================

const taskList =
document.getElementById(
"taskList"
);

function loadTasks(){

    const tasks =
    JSON.parse(
    localStorage.getItem(
    "tasks"
    )
    ) || [];

    tasks.forEach(task => {

        const li =
        document.createElement(
        "li"
        );

        li.textContent =
        task;

        taskList.appendChild(
        li
        );

    });

}

function addTask(){

    const taskInput =
    document.getElementById(
    "taskInput"
    );

    const task =
    taskInput.value.trim();

    if(task === ""){
        return;
    }

    const li =
    document.createElement(
    "li"
    );

    li.textContent = task;

    taskList.appendChild(
    li
    );

    const tasks =
    JSON.parse(
    localStorage.getItem(
    "tasks"
    )
    ) || [];

    tasks.push(task);

    localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
    );

    taskInput.value = "";

}

loadTasks();


// ===============================
// NOTES
// ===============================

function saveNotes(){

    const notes =
    document.getElementById(
    "notes"
    ).value;

    localStorage.setItem(
    "notes",
    notes
    );

    alert(
    "Notes Saved Successfully!"
    );
}

const notesArea =
document.getElementById(
"notes"
);

if(notesArea){

    notesArea.value =
    localStorage.getItem(
    "notes"
    ) || "";

}


// ===============================
// MOTIVATION QUOTES
// ===============================

const quotes = [

"Success is the sum of small efforts repeated daily.",

"Every expert was once a beginner.",

"Believe in yourself.",

"Learning never exhausts the mind.",

"Stay focused and keep improving.",

"Your future is created by what you do today.",

"Small progress is still progress.",

"Consistency beats talent when talent doesn't work hard."

];

const quoteElement =
document.getElementById(
"quote"
);

if(quoteElement){

quoteElement.innerHTML =
quotes[
Math.floor(
Math.random() *
quotes.length
)
];

}


// ===============================
// PROGRESS BAR DEMO
// ===============================

const progressBar =
document.getElementById(
"progressBar"
);

if(progressBar){

    let progress =
    localStorage.getItem(
    "progress"
    ) || 35;

    progressBar.value =
    progress;

}