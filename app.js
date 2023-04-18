const reviews = [
    {
        name: "Szent Endre",
        job: "Javascript Fejlesztő",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatem amet esse minus iusto a placeat nemo aliquam! Repellendus reprehenderit minus commodi quo, expedita nostrum rem aliquid odit ex autem quae sint deserunt aut impedit placeat a, necessitatibus ullam dolore repudiandae vitae iusto enim ipsam. Molestiae quam dicta mollitia optio error laboriosam earum alias repellendus sed, voluptates, quidem repellat sunt voluptas molestias. Quod, totam. Voluptas eveniet facere porro saepe numquam! Iure tenetur repellendus asperiores labore!"
    },
    {
        name: "Török Bálint",
        job: "Java fejlesztő",
        img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatem amet esse minus iusto a placeat nemo aliquam! Repellendus reprehenderit minus commodi quo, expedita nostrum rem aliquid odit ex autem quae sint deserunt aut impedit placeat a, necessitatibus ullam dolore repudiandae vitae iusto enim ipsam. Molestiae quam dicta mollitia optio error laboriosam earum alias repellendus sed, voluptates, quidem repellat sunt voluptas molestias. Quod, totam. Voluptas eveniet facere porro saepe numquam! Iure tenetur repellendus asperiores labore!"
    },
    {
        name: "Nagy Zsanett",
        job: "Automata tesztelő",
        img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatem amet esse minus iusto a placeat nemo aliquam! Repellendus reprehenderit minus commodi quo, expedita nostrum rem aliquid odit ex autem quae sint deserunt aut impedit placeat a, necessitatibus ullam dolore repudiandae vitae iusto enim ipsam. Molestiae quam dicta mollitia optio error laboriosam earum alias repellendus sed, voluptates, quidem repellat sunt voluptas molestias. Quod, totam. Voluptas eveniet facere porro saepe numquam! Iure tenetur repellendus asperiores labore!"
    },
]; 





// Használni kívánt elemeket eltároljuk változókba 
const img = document.getElementById("person-img"); 
const author = document.getElementById("author"); 
const job = document.getElementById("job"); 
const text = document.getElementById("text");

//Két gomb 
const prev = document.querySelector(".prev-btn")
const next = document.querySelector(".next-btn")

//Kiinduló érték felvétele 
let current = 0;

//Oldal betöltődésre töltsük be az első személyt oldalra

window.addEventListener("load", () =>{

    const item = reviews[current]; 
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job; 
    text.textContent = item.text;  
})


//Írok egy függvényt amellyel ki tudjuk választani a következő embert 
function showPerson(person){

    const item = reviews[person]; 
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job; 
    text.textContent = item.text;  
}

//Next gomb megnyomására ugorjunk a következő emberre
next.addEventListener("click", () =>{

        //Léptetjük a kiinduló currentet 1-el ->lépünk a következő emberre 
    current ++; 

        //Ha a kiinduló értékünk 1-el kisebb mint a reviews tömb hossza 
    if (current > reviews.length-1){
        //akkor álljon vissza a kiinduló érték 0 ra -> vagyis a tömb elejére 
        current = 0; 
    }
    
    showPerson(current); 
    

   
})

prev.addEventListener("click", () =>{

    //Léptetjük a kiinduló currentet 1-el ->lépünk a következő emberre 
current --; 

    //Ha a kiinduló értékünk 1-el kisebb mint a reviews tömb hossza 
if (current < 0){
    //akkor álljon vissza a kiinduló érték 0 ra -> vagyis a tömb elejére 
    current = reviews.length-1; 
}


showPerson(current); 


})


