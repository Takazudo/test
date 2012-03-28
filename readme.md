# grunt - parallelwatch example

```bash
.
|-- common
|   |-- coffee
|   |   |-- 1.coffee
|   |   `-- 2.coffee
|   |-- css <- compiled css files will be put here
|   |-- js  <- compiled js files will be put here
|   `-- scss
|       |-- 1.scss
|       `-- 2.scss
|-- grunt.js
`-- tasks
    |-- coffee.js        <- coffee task
    |-- parallelwatch.js <- parallelwatch task
    `-- sass.js          <- sass task
```

```bash
$ grunt
```

does tasks both coffee and sass

```bash
$ grunt parallelwatch
```

does tasks do two watches individually coffee and sass.  
When modify 1.coffee was modified, grunt runs coffee task.  
When modify 1.scss was modified, grunt runs sass task.  
