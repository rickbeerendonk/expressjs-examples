# Express Generator

## Run

Command line, with standard view-engine (Jade):

```zsh
npx express-generator app-jade
```

### No View

Command line without view-engine:

```zsh
npx express-generator app-no-view --no-view
```

### Pug (fka Jade)

Not specifying the view engine means using Jade. However Jade isn't is now called Pug. Jade itself isn't developed anymore.

Command line with Pug:

```zsh
npx express-generator app-pug -e --pug
```

See: https://pugjs.org/

### EJS

Command line with EJS:

```zsh
npx express-generator app-ejs -e --ejs
```

See: https://ejs.co/

## Docs

Intro: https://expressjs.com/en/starter/generator.html
Template engines: https://expressjs.com/en/resources/template-engines.html

## Copyright

Copyright © 2022 Rick Beerendonk
