# OatmealCookieJS
A small JavaScript Library for easy in-site cookie management.
- Place oatmealcookie.js in your 'models' directory.
- Add 'var OCookie = require('../models/oatmealcookie');' into whatever Script file you need to make cookies in.

# Supported Functions are:

- OCookie.Bake(name, value);

Create a cookie with specified name and value.

- OCookie.Eat(name);

Gets the data of cookie with specified name. Can be combined with a var definition to save the cookie data to a variable.

- OCookie.Burn(name);
 
Deletes cookie with specified name.
