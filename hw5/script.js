const title=document.getElementById('content')
const input=document.getElementById('input')
const button=document.getElementById('button')

button.addEventListener('click', ( )=>{
    alert('button')
})
const array = [
 
        {
            "name": "Jerald.Moen",
            "age": "8",
            "adress": "721 Gerlach Walk",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1022.jpg",
            "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
            "id": "11"
        },
        {
            "name": "Rogelio91",
            "age": "7",
            "adress": "273 Waelchi Plains",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1065.jpg",
            "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
            "id": "12"
        },
        {
            "name": "Carolanne_Haag",
            "age": "7",
            "adress": "641 Turner Rue",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg",
            "desprition": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
            "id": "13"
        },
        {
            "name": "Minnie_Emmerich29",
            "age": "7",
            "adress": "040 Nasir Mall",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/54.jpg",
            "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
            "id": "14"
        },
        {
            "name": "Octavia_Hackett53",
            "age": "7",
            "adress": "36204 Dickens Square",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1106.jpg",
            "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            "id": "15"
        },
        {
            "name": "Nigel35",
            "age": "8",
            "adress": "9048 Cathy Mills",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/545.jpg",
            "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
            "id": "16"
        },
        {
            "name": "Tyshawn.Grant",
            "age": "7",
            "adress": "7359 Marion Way",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/874.jpg",
            "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
            "id": "17"
        },
        {
            "name": "Nat9",
            "age": "2",
            "adress": "447 America Course",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/340.jpg",
            "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
            "id": "18"
        },
        {
            "name": "Roman_Harber81",
            "age": "8",
            "adress": "4566 Koch Roads",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/532.jpg",
            "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
            "id": "19"
        },
        {
            "name": "Eduardo96",
            "age": "5",
            "adress": "08316 Sarai Fork",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1150.jpg",
        }
]

input.addEventListener('input', (e)=>{
    const value=e.target.value.trim()
    const valie=[]
title.innerHTML=''
for(let i = 0; i < array.length; i++){
    const element = array[i]
    if(element.name.includes(value)){
        valie.push(element)
    }
}

for(let i = 0; i < valie.length; i++){
    const element = valie[i]

    title.innerHTML += `
    <div class='kolya'>
    <img src="${element.avatar}" alt="">
    <h2>${element.name}</h2>
    <p>${element.desprition}</p> 
    </div> 
    `
}

})

console.log(title);


document.getElementById("button").addEventListener("click", function() {
    createCircle()
})


function createCircle() {
    var circle = document.createElement("div");
    circle.classList.add("circle");
    document.getElementById("content").appendChild(circle)
}