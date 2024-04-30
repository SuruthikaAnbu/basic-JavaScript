function fun1()
{
    var a=document.getElementById("name").value;
    var b=document.getElementById("password").value;
    if(a==b)
    {
        alert(a);
        alert(b);
        alert("username and password are same");
    }
    else{
        alert("not match");
    }
}
//radio button
function fun2()
{
    var rd1=document.getElementById("rd1");
    var rd2=document.getElementById("rd2");
    var rd3=document.getElementById("rd3");
    if(rd1.checked==true)
    {
        alert(rd1.value);
    }
    else if(rd2.checked==true)
    {
        alert(rd2.value);
    }
    else if(rd3.checked==true)
    {
        alert(rd3.value);
    }
}
//select
function fun3(){
    var selection=document.getElementById("food");
    alert(selection.options[selection.selectedIndex].value);
}