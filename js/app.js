// **reviews data

const reviews = [
    {
        id: 1,
        name: "anna smith",
        job : "developer",
        img : ("./image/human-g71060ff92_1920.jpg"),
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo saepe quos harum est dolor autem atque! Perferendis nulla dolore adipisci necessitatibus, consequuntur molestiae rerum ipsam, nemo obcaecati quibusdam praesentium velit corporis beatae, voluptatum vero impedit aliquid doloremque deleniti atque ex ipsa saepe ullam?",
    },
     
    {
        id : 2,
        name : "peter johnson",
        job: "UI designer",
        img: ("./image/beard-g5cd3f5e1b_1920.jpg"),
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo saepe quos harum est dolor autem atque! Perferendis nulla dolore adipisci necessitatibus, consequuntur molestiae rerum ipsam, nemo obcaecati quibusdam praesentium velit corporis beatae, voluptatum vero impedit aliquid doloremque deleniti atque ex ipsa saepe ullam? Quidem nulla quos inventore minima tenetur minus animi voluptatum enim omnis ea magni excepturi, eveniet nesciunt doloremque sunt, debitis aspernatur ratione! Cum consequatur recusandae a rerum quo fuga facere id ratione doloremque.Quidem nulla quos inventore minima tenetur minus animi voluptatum enim omnis ea magni excepturi, eveniet nesciunt doloremque sunt, debitis aspernatur ratione! Cum consequatur recusandae a rerum quo fuga facere id ratione doloremque.",
    },
    {
        id:3,
        name:"susan anderson",
        job: "intern",
        img: ("./image/adult-g421cb9cb9_1920.jpg"),
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo saepe quos harum est dolor autem atque! Perferendis nulla dolore adipisci necessitatibus, consequuntur molestiae rerum ipsam, nemo obcaecati quibusdam praesentium velit corporis beatae, voluptatum vero impedit aliquid doloremque.",
    },
    {
        id:4,
        name: "bill turhed",
        job: "web developer",
        img:("./image/attractive-g23bc633d4_1920.jpg"),
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo saepe quos harum est dolor autem atque! Perferendis nulla dolore adipisci necessitatibus, consequuntur molestiae rerum ipsam, nemo obcaecati quibusdam praesentium velit corporis beatae, voluptatum vero impedit aliquid doloremque deleniti atque ex ipsa saepe ullam? Quidem nulla quos inventore minima tenetur minus animi voluptatum enim omnis ea magni excepturi, eveniet nesciunt doloremque sunt, debitis aspernatur ratione! Cum consequatur recusandae a rerum quo fuga facere id ratione doloremque.Quidem nulla quos inventore minima tenetur minus animi voluptatum enim omnis ea magni excepturi, eveniet nesciunt doloremque sunt, debitis aspernatur ratione! Cum consequatur recusandae a rerum quo fuga facere id ratione doloremque.",
    },
   
]

// select

const img = document.getElementById("person-img");
const author = document.querySelector("#author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let startItem = 0;

window.addEventListener("load", () => {

});

const showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", () =>{
    startItem++;
    if(startItem > reviews.length-1){
        startItem = 0;
    }
    showPerson(startItem);
});

prevBtn.addEventListener("click", () => {
    startItem--;
    if(startItem < 0){
        startItem = reviews.length -1;
    }
    showPerson(startItem);
});

randomBtn.addEventListener("click", () =>{
    confirm("DO YOU LIKE THIS PAGE?");
    startItem = Math.floor(Math.random() * reviews.length);
    showPerson(startItem);
})


