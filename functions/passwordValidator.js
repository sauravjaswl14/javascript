function isValidPassword(password,username)
{
    if(password.length >= 8)
    {
        if(password.indexOf(' ') !== -1 || password.includes(username))
        {
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}



/*
0 0 0
0 1 1
1 0 1
1 1 1
*/