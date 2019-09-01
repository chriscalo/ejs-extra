# ejs-extra

A utility for rendering EJS templates with a few enhancements.

Installation:

``` sh
yarn add @chriscalo/ejs-extra
# or
npm install @chriscalo/ejs-extra
```

Usage:

``` js
const html = render("./foo.ejs", {
  req,
  res,
  list: [ 1, 2, 3 ],
});
```

``` ejs
<%
const util = require("./path/to/some/util.js");
%>
<%= req.originalUrl %>
```

Features:
- use `require()` in EJS files
- a better `include()` function with support for absolute, relative, and module paths
- helpful errors messages via ejs-lint

TODO:
- [ ] async rendering
- [ ] `renderString()` function
- [ ] create express view engine ([docs][1])

[1]: https://expressjs.com/en/advanced/developing-template-engines.html
