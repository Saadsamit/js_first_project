// biyer condition 
function biye_boyosh(a){
    if(a >=23 && a <= 25){
        document.write("ar kicho din por")
    }
    else if(a >=26 && a <= 32){
        document.write("you are eligible")
    }
    else{
        document.write("you are not eligible")
    }
    document.write('<br/>')
}
biye_boyosh(28)
//odd/even numb er check
function name(a){
    if (a % 2 == 0){
        document.write("even")
    } else {
        document.write("odd")
    }
    document.write('<br/>')
}
name(2)
name(4)
name(10)
name(15)
name(17)
name(20)
name(22)
name(23)
function text_chance(){
    document.getElementById("btn").innerText= "submited"
    document.getElementById("btn").style.color= "#fff"
    document.getElementById("btn").style.backgroundColor= "black"
    document.getElementById("btn").style.borderRadius= "5px"
}