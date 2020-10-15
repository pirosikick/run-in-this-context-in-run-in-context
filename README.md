```console
$ node runInThisContext.js
running b.js...
global.globalName main

$ node runInThisContextInRunContext.js
running a.js...
global.globalName custom global
running b.js...
global.globalName main
```
