# ejs-plus

A utility for rendering [EJS templates][ejs-site] with enhancements.

Installation:

``` sh
yarn add ejs-plus
# or
npm install ejs-plus
```

Usage:

``` js
const { render } = require("ejs-plus");

const html = render("./foo.ejs", {
  foo: "bar",
  list: [ 1, 2, 3 ],
});
```

``` ejs
<%
const util = require("./path/to/some/util.js");
%>
<%= foo %>
<% for (const i of list) { %>
  <%= i %>
<% } %>
```

Features:
- use `require()` in EJS files
- a better `include()` function with support for absolute, relative, and module paths
- helpful errors messages via `ejs-lint`

TODO:
- [ ] async rendering
- [ ] separate functions for string and file rendering
- [ ] create express view engine ([docs][express-engines])

[ejs-site]: https://ejs.co
[express-engines]: https://expressjs.com/en/advanced/developing-template-engines.html
