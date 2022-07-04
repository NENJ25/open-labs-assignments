var colors = ["#F6BD60", "#F7EDE2", "#F5CAC3", "#84A59D", "#F28482"]
var c = 0
function calculate(){
    var a = document.getElementById("mainnumber").value;
    var b = document.getElementById("maxmultiplier").value;
    var d = c % 5;
    var color = colors[d]
    times_table = `<div class="tablecontainers"><h2 style="background-color: ${color}">${a}</h2><table class="tables">`
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
    times_table += `</table></div>`;

    c+=1;

    document.getElementById("mainnumber").value = "";
    document.getElementById("maxmultiplier").value = "";
    document.getElementById("timescontainer").innerHTML += times_table;
}

function remove(){
    document.getElementById("timescontainer").innerHTML = ""
}

document.getElementById("calcbutton").addEventListener("click", calculate)
document.getElementById("removebutton").addEventListener("click", remove)