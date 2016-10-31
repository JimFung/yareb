# **YAREB**: Yet Another React + Electron Boilerplate

There are lots of amazing boilerplates out there for you to choose from if you're looking to start on a new Electron + React project. I suggest you use this [one](https://github.com/chentsulin/electron-react-boilerplate). It's incredibly comprehensive and has a lot of features built in, like hot reloading.

Personally, it was too much overhead for me so I decided to build my boilerplate. Something with a smaller footprint and after reading webpack, electron, react docs and some hacking, YAREB was born. I'm clearly no expert with any of these technologies so if you run into problems/issues send a PR or fork it and do perform whatever dark magic you want. Have fun!

## **Using**
```bash
npm run compile: Removes the old /build directory and runs Webpack to transpile your code into a /build.

npm start: npm run compile + electron . to start your app.
```

You'll want to keep your react code inside /views, your electron code inside /logic, and your CSS code inside /views/styles. Anything inside /logic will be moved over to the root of the build dir, which is something to keep in mind when you're referencing your code. The /styles dir is also moved over as is to the root of the build dir.
