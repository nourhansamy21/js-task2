//1 setup variables
var productbtn = document.getElementById("productbtn");
var productcontainer = document.getElementById("productcontainer");
data = [
    { id: 1, name: "book1", desc : "this is..." },
    { id: 2, name: "book2", desc : "this is..." },
    { id: 3, name: "book3", desc : "this is..." },
    { id: 4, name: "book4", desc : "this is..." },
]
//console.log(data)

//2 draw data
function draw(items) {
    //console.log(items)
    productcontainer.innerHTML = "";
    items.forEach(
        function (ele) {
            //console.log(ele);
            //productcontainer.innerHTML += "<div>" + ele.name + "</div>";
            productcontainer.innerHTML += `<div onclick = deleteitem(${ele.id})> ${ele.name} </div>`;
        }
    )     
}

//3 load data
window.onload = function () {
    draw(data);
}

//4 add item
productbtn.addEventListener("click", additem);
function additem() {
    var productinput = document.getElementById("productinput");
    if (productinput.value == "") alert("you should enter product");
    //console.log(data);
    //data[data.length - 1].id     //catch the last id
    //var lastid = data.length ? data[data.length - 1].id : 0;
    var lastid = data[data.length - 1].id;
    data.push({ id: ++lastid, name: productinput.value, desc: "this is..." });
    //console.log(data);
    var additem = data[data.length - 1];
    //console.log(additem);
    //productcontainer.innerHTML += "<div>" + additem.name + "</div>";
    productcontainer.innerHTML += `<div onclick = deleteitem(${additem.id})> ${additem.name} </div>`;
    productinput.value = "";
}

//5 delete item
function deleteitem(id) {
    //console.log(id);
    //data.splice(1,1)
    var index = data.map(function (i) {
        return i.id
    }).indexOf(id)
    if (index !== -1) {
        data.splice(index, 1)
        draw(data)
    }
    console.log(data)
    //console.log(data);
}