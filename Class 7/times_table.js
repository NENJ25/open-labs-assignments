var colors = ["#F6BD60", "#F7EDE2", "#F5CAC3", "#84A59D", "#F28482"]
var c = 0
function calculate(){
    var a = document.getElementById("mainnumber").value;
    var b = document.getElementById("maxmultiplier").value;
    var d = c % 5;
    var color = colors[d]
    times_table = `<div class="tablecontainers" id="table_${c}"><h2 style="background-color: ${color}">${a}</h2><table class="tables">`
    for(i=0; i<=b; i++){
        var product = a * i;
        times_row = `<tr>
                        <td>
                            ${a}
                        </td>

                        <td>
                            x
                        </td>

                        <td>
                            ${i}
                        </td>

                        <td>
                            =
                        </td>

                        <td>
                            ${product}
                        </td>
                    </tr>`
        times_table += times_row
    }
    times_table += `</table><button class="remove_" style="color:${color}">Remove</button></div>`;
    // document.getElementById(`remove_${c}`).style.color = color;

    c+=1;

    //clear the input boxes after displaying the times table
    document.getElementById("mainnumber").value = "";
    document.getElementById("maxmultiplier").value = "";
    document.getElementById("timescontainer").innerHTML += times_table;
}

// removes all times tables and presents a fresh page
function remove_all(){
    document.getElementById("timescontainer").innerHTML = ""
}

document.getElementById("calcbutton").addEventListener("click", calculate);
document.getElementById("removebutton").addEventListener("click", remove_all);

var container = document.querySelector("#timescontainer");

//functionality to remove each table using a remove button
container.addEventListener("click", function(e){
    if (e.target.classList.contains('remove_')) {
        e.target.parentNode.remove();
    }
})