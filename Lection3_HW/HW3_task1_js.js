var name = prompt("Enter your name:", "Yevhen");
var flag = false;
var res;
for (var i = 0; i < (String(name)).length; i++)
{
    if (String(parseInt(name.charAt(i), 10)) != "NaN")
    {
        flag = true;
        break;
    }
}
if (flag == true)
{
    res = (String(name)).toUpperCase();
}
else
{
    res = (String(name)).split("").reverse().join("");
}
alert(res);