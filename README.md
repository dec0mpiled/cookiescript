# OatmealCookieJS
A small JavaScript Library for easy in-site cookie management.
- Place OatmealCookie.js in your 'routes' directory.
- Add 'var OCookie = require('oatmealcookie');' into whatever Script file you need to make cookies in.

# Supported Functions are:

- BakeCookie(name, value);

Create a cookie with specified name and value.

- EatCookie(name);

Gets the data of cookie with specified name. Can be combined with a var definition to save the cookie data to a variable.

- BurnCookie(name);
 
Deletes cookie with specified name.
