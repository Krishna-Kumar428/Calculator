let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let arr = Array.from(buttons);

let string = "";

arr.forEach((Element) => {
    Element.addEventListener("click", (kk) =>{

        if(kk.target.innerHTML == '=')
        {
            string = eval(string);
            input.value = string;
        }

        else if(kk.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(kk.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += kk.target.innerHTML;
            input.value = string;
        }
    })
})
