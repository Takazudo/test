```
├── _build_coffee
│   └── grunt.js // watch and do coffee compiles - (1)
├── _build_sass
│   └── grunt.js // watch and do sass compiles - (2)
├── common
│   ├── coffee // (1) watches this
│   │   ├── 1.coffee
│   │   └── 2.coffee
│   ├── css
│   ├── js
│   └── scss // (2) watches this
│       ├── 1.scss
│       └── 2.scss
└── index.html
```

```bash
$ cd _build_coffee
$ grunt watch
```

```bash
$ cd _build_sass
$ grunt watch
```
