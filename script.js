function form_submit()
{
    let a=String(document.getElementById("name").value);
    let b=String(document.getElementById("password").value);

    if (a=="")
    {
        alert("Name Must Be Required");
        a.focus();
        return false;
    }
    if (b.length <8)
    {
        alert("Password Is Too Short");
        b.focus();
        return false ;
    }
    else if (b.length >12)
    {
        alert("Password Is Too long");
        b.focus();
        return false ;
    }
    else
    {
        alert("Register Successfully");
    }
}
