# webpack-boilerplate-jshint-babel-less
Webpack starter boilerplate w/ plugins for watch server, jshint, es6 (via babel), less, and flux/react

# To run

First, install the Webpack watch server (`webpack-dev-server`) and dependencies.

```
$ npm install -g webpack-dev-server

$ npm install
```

Next, start up the watch server:

```
$ webpack-dev-server
```

Visit http://localhost:8080.

- You should see the page indicate flux is active via the webpack-assembled bundle.
- Open up your dev console and look at `main.js`.  Although everything is bundled into a single source, sourcemaps make the original files appear.  Hooray debugging!
- Now change one of the javascript files.  Note that the watch server notices and rebuilds the bundle (touching only changed files... hooray Webpack caching!)
