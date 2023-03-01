let div = document.createElement("div")
div.style.background = "red"
div.style.padding = "20px"
let p = document.createElement("p")
p.innerHTML = ("salam Elmar necesen?")
p.style.color = "green"
p.style.marginBottom = "30px"
let p2 = document.createElement("p")
p2.innerHTML = ("yaxsiyam sen necesen?")
p2.style.color = "green"
document.body.append(div);
div.append(p)
div.append(p2)