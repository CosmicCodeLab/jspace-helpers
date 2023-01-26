# jspace-helpers
![GitHub branch checks state](https://img.shields.io/github/checks-status/cosmiccodelab/jspace-helpers/main?label=main%20branch)
![GitHub](https://img.shields.io/github/license/cosmiccodelab/jspace-helpers)
![GitHub repo size](https://img.shields.io/github/repo-size/cosmiccodelab/jspace-helpers)

A simple package who handle multiple functions

## Install

With npm
```sh 
npm install @cosmiccodelab/jspace-helpers
```

With yarn
```sh 
yarn add @cosmiccodelab/jspace-helpers
```

## Usage

```ts
import { classNames } from "@cosmiccodelab/jspace-helpers";

const classes = className(
  'class1 class2', 
  'class3 class4'
)
console.log(classes)
// 'class1 class2 class3 class4'
```

Instead of import root folder and compile entire library you can pick what you whant :
```ts
import { classNames } from "@cosmiccodelab/jspace-helpers/classNames";

const classes = className(
  'class1 class2', 
  'class3 class4'
)
console.log(classes)
// 'class1 class2 class3 class4'
```