
let container = document.querySelector("#container");

let displayData = ()=>{
    for(let i = 0; i<20; i++){
        let div = document.createElement("div");
        div.setAttribute("class","inDiv")
        let img = document.createElement("img");
        img.src = "https://a0.muscache.com/im/pictures/a1d94df4-0001-47ef-a45e-21db63919e79.jpg?im_w=720"
        let div2 = document.createElement("div");
        div2.setAttribute("class","title");
        let h3 = document.createElement("h3");
        h3.innerHTML = "Paklol, Thialand";
        let rating = document.createElement("p")
        rating.innerHTML = "⭐ 5.0";
        div2.append(h3,rating);
        let distance = document.createElement("p")
        distance.innerHTML = "2,741 Kilometers away";
        let date = document.createElement("p");
        date.innerHTML = "17-24 Jun"
        let cost = document.createElement("h4")
        cost.setAttribute("class","cost")
        cost.innerHTML = `₹1,25,723 <span style="font-weight:100;">night</span>`
        div.append(img,div2,distance,date,cost);
        container.append(div);
    }
}

displayData();