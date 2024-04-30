var finOpe;
var value1="";
var value2="";
function number1(input)
{
    //alert("jsad");
    // var num=document.getElementsByClassName("cal1");
    // for(var i=0;i<num.length;i++)
    // {
    //     //alert(num[i].value);
    //     // if(num[i].onclick=function())
    //     // {
    //     //alert(num[i].value);
    //     // }
    //         num[i].addEventListener('click', function() {
    //         myFunction(num[i].value);
    //       })
    // }
    document.getElementById("displayValue").value += input;
    
    
}
/*----------un wanted creativity------- :-)
function number2()
{
    document.getElementById("displayValue").value += document.getElementById("val2").value;
    
}
function number3()
{
    document.getElementById("displayValue").value += document.getElementById("val3").value;
    
}
function number4()
{
    document.getElementById("displayValue").value += document.getElementById("val4").value;
    
}
function number5()
{
    document.getElementById("displayValue").value += document.getElementById("val5").value;
    
}
function number6()
{
    document.getElementById("displayValue").value += document.getElementById("val6").value;
    
}
function number7()
{
    document.getElementById("displayValue").value += document.getElementById("val7").value;
    
}
function number8()
{
    document.getElementById("displayValue").value += document.getElementById("val8").value;
    
}
function number9()
{
    document.getElementById("displayValue").value += document.getElementById("val9").value;
    
}
function number0()
{
    document.getElementById("displayValue").value += document.getElementById("val0").value;
    
}
*/
function operator(inputoper)
{
    value1=document.getElementById("displayValue").value;
    
    
    finOpe=inputoper;
    document.getElementById("displayValue").value += document.getElementById("minus").value;
    document.getElementById("displayValue").value='';
    
}
/*
function operator2()
{
    value1=document.getElementById("displayValue").value;
    
    
    finOpe='-';
    document.getElementById("displayValue").value += document.getElementById("minus").value;
    document.getElementById("displayValue").value='';
    
}
function operator3()
{
    temp=document.getElementById("displayValue").value;
    value2=value1;
    value1=temp;
    finOpe='*';
    document.getElementById("displayValue").value += document.getElementById("muls").value;
    document.getElementById("displayValue").value='';
    
}
function operator4()
{
    temp=document.getElementById("displayValue").value;
    value2=value1;
    value1=temp;
    finOpe='/';
    document.getElementById("displayValue").value += document.getElementById("div").value;
    document.getElementById("displayValue").value='';
    
}
function operator5()
{
    temp=document.getElementById("displayValue").value;
    value2=value1;
    value1=temp;
    finOpe='%';
    document.getElementById("displayValue").value += document.getElementById("mod").value;
    document.getElementById("displayValue").value='';
    
}
*/
function Result()
{
    value2=document.getElementById("displayValue").value;
    // alert(value1);
    // alert(value2);
    var val1=parseInt(value1);
    var val2=parseInt(value2);
    switch(finOpe)
    {
        case "+":
            document.getElementById("displayValue").value=val1+val2;    
            break;
        case "-":
            document.getElementById("displayValue").value=val1-val2;    
            break;
        case "*":
            document.getElementById("displayValue").value=val1*val2;    
            break;
        case "/":
            document.getElementById("displayValue").value=val1/val2;    
            break;
        case "%":
            document.getElementById("displayValue").value=val1%val2;
    }
}
