# webpack-simple-starter

> I did this more than once... so now, it's a repository.

Many of the webpack starter kits out there are pretty verbose, and come with quite a few default loaders. In the cases where I just wanted to spin up something simple I felt like I was better off starting with an empty directory.

This repository reflects what I would usually wind up with before branching off into specifics.

If you find it useful, great! If not, that's alright too.


## Tips + Tricks

I've added a few `npm` `scripts` you might find useful, but only if you use the `npm` `--` argument flag.

`npm run webpack` - This will execute the local webpack module.
ex: `npm run webpack -- --output=dist/main.js`

`npm run webpack-dev-server` - This will execute the local webpack-dev-server module.
ex: `npm run webpack-dev-server -- --host=0.0.0.0`

_The `package.json` file is there mostly for scaffolding purposes, the code in this repository is licensed under the repository provided license._

I've attempted to set up the `webpack.config.js` in a simple yet customizable way. For those new to webpack it might look a little strange, but the idea is you can remove the chunks you don't need/want a little easier.