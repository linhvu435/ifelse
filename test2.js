let name = prompt("nhap ten");
if(name == 'Admin')
{
    let mk = prompt('nhap mk');
    if( mk == 'TheMaster')
    {
        document.write('Welcom');
    }
    else if ( mk == 'null')
    {
        document.write('Canceled');
    }
    else
    {
        document.write('Wrong password.');
    }
}
else if( name == 'null')
{
    document.write('cancel');
}
else
{
    document.write("i don't know you");
}



