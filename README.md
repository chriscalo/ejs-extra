# @chriscalo/ejs-extra

A utility for rendering [EJS templates][ejs-site] with a few enhancements.

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
- [ ] separate functions for string a file rendering
- [ ] create express view engine ([docs][express-engines])

[ejs-site]: https://ejs.co
[express-engines]: https://expressjs.com/en/advanced/developing-template-engines.html
