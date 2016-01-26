# CookieScript
A small JavaScript Library for easy in-site cookie management.
- Place cookiescript.js in your 'public' directory.
- Add `<script type="text/javascript" src="/cookiescript.js"></script>` into the `<head>` tag of the page you'd like to make cookies on.

# Supported Functions are:

- `NewCookie(name, value);`

Create a cookie with specified name and value.

- `GetCookie(name);`

Gets the data of cookie with specified name. Can be combined with a var definition to save the cookie data to a variable.

- `VoidCookie(name);`
 
Deletes cookie with specified name.
