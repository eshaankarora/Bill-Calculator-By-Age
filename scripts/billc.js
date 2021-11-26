window.addEventListener("load",function(){
    document.querySelector("#name").value="";
    document.querySelector("#age").value="";
});


function addnewrow(){
    var partbody= document.querySelector("tbody");
    var new_row= document.createElement("tr");
    var new_sno= document.createElement("td");
        var pointer= parseInt(document.querySelector("tbody").lastElementChild.firstElementChild.textContent);
        pointer+=1;
        pointer+='.';
        new_sno.textContent= pointer;
        new_row.appendChild(new_sno);
    var new_name= document.createElement("td");
        var new_name_ip= document.createElement("input");
        new_name_ip.setAttribute("id", "name");
        new_name.appendChild(new_name_ip);
        new_row.appendChild(new_name);
    var new_age= document.createElement("td");
        var new_age_ip= document.createElement("input");
        new_age_ip.setAttribute("id", "age");
        new_age.appendChild(new_age_ip);
        new_row.appendChild(new_age);
    var rem= document.createElement("td");
        var rem_button= document.createElement("button");
        rem_button.setAttribute("id", "rembutton");
        rem_button.addEventListener("click", function(){
            if(rem_button.parentElement.parentElement==partbody.lastElementChild)
            {
                var add= rem_button.parentElement.nextElementSibling.cloneNode(true);
                new_row.parentElement.removeChild(new_row);
                partbody.lastElementChild.appendChild(add);
            }
            else
            {
                var i=new_row;
                console.log(i.tagName);
                while(i.nextElementSibling)
                {
                    i=i.nextElementSibling;
                    var temp= parseInt(i.firstElementChild.textContent)-1;
                    temp+= '.';
                    i.firstElementChild.textContent= temp;
                }
                new_row.parentElement.removeChild(new_row);
            }
        })
        // rem_button.setAttribute("onclick", "remrow()");
        var rem_icon= document.createElement("img");
        rem_icon.setAttribute("src", "resources/minus_icon4.png");
        rem_icon.setAttribute("id", "minus");
        rem_button.appendChild(rem_icon);
        // var text= document.createTextNode(" Remove");
        // rem_button.appendChild(text);
        rem.appendChild(rem_button);
        new_row.appendChild(rem);
    var add= partbody.lastElementChild.lastElementChild.cloneNode(true);
        partbody.lastElementChild.removeChild(partbody.lastElementChild.lastElementChild);
        new_row.appendChild(add);
    partbody.appendChild(new_row);
    
}


document.querySelector("#tip").addEventListener("input", function(){
    document.querySelector("#tipval").value=document.querySelector("#tip").value;
});

document.querySelector("#tipval").addEventListener("input", function(){
    document.querySelector("#tip").value=document.querySelector("#tipval").value;
});


document.querySelector("#calculate").addEventListener("click", function(){
    document.querySelector("#total").value= parseFloat(document.querySelector("#billtot").value)*(100+parseInt(document.querySelector("#tip").value))/100;
    var name_arr= document.querySelectorAll("#name");
    var age_arr= document.querySelectorAll("#age");
    var sumofage= 0;
    for(j=0; j<age_arr.length; j++)
    {
        sumofage+=parseInt(age_arr[j].value);
    }
    var newdiv= document.createElement("div");
    for(j=0; j<name_arr.length; j++)
    {
        var p= document.createElement("p");
        var dues=parseFloat(document.querySelector("#total").value)*parseInt(age_arr[j].value)/sumofage;
        p.textContent=name_arr[j].value+ ": "+ dues.toPrecision(4);
        newdiv.appendChild(p);
    }
    document.querySelector("#result").replaceChild(newdiv,document.querySelector("#result").lastElementChild);
    document.querySelector("#result").style.display="block";
});
