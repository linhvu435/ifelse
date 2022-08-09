let nam =parseInt(prompt("nhap nam"));
if (nam % 4 == 0 && nam % 100!=0)
{
    document.write("la nam nhuan");
}
else if(nam%100 ==0 && nam%400==0)
{
    document.write('la nam nhuan');
}
else if (nam%100==0 && nam%400!=0)
{
    document.write("khong la nam nhuan");
}
else
{
    document.write("khong la nam nhuan")
}