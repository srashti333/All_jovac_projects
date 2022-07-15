var a,b,c;



function calc()
{
    a=prompt("What operation do you want to perform \n 1) Addition \n 2) Subtraction \n 3) Multiplication \n 4) Division");
    b = prompt('enter first number');
    c = prompt('enter second number');
    if(a==1)
    {
        Sum();
    }
    else if(a==2)
    {
        Sub();
    }
    else if(a==3)
    {
        Mul();
    }
    else if(a==4)
    {
        Div();
    }
    else
    {
        console.log("wrong input");
        document.getElementById("result").innerHTML=" WRONG INPUT ";
    }
}

function Sum()
{
    var res=parseInt(b)+parseInt(c);
    console.log(res);
    document.getElementById("result").innerHTML=res;
}
function Sub()
{
    var res=parseInt(b)-parseInt(c);
    console.log(res);
    document.getElementById("result").innerHTML=res;
}
function Mul()
{
    var res=parseInt(b)*parseInt(c);
    console.log(res);
    document.getElementById("result").innerHTML=res;
}
function Div()
{
    var res=parseInt(b)/parseInt(c);
    console.log(res);
    document.getElementById("result").innerHTML=res;
}
calc();