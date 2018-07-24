# obj2pdf
A server-side npm package to convert a JSON object to a PDF.

[![Build Status](https://travis-ci.org/NikhilNanjappa/obj2pdf.svg?branch=master)](https://travis-ci.org/NikhilNanjappa/obj2pdf)
[![Coverage Status](https://coveralls.io/repos/github/NikhilNanjappa/obj2pdf/badge.svg?branch=master)](https://coveralls.io/github/NikhilNanjappa/obj2pdf?branch=master)
[![npm version](https://badge.fury.io/js/obj2json.svg)](https://badge.fury.io/js/obj2json)

<!-- TOC -->
<!-- Input JSON -->
<!-- Generated PDF image -->
<!-- PDF specs like font sizes, allowed types, how to get 'heading' etc -->

# Dependencies

This package is dependent on the [`pdfmake`](https://github.com/bpampuch/pdfmake) package.

# Installation

```sh
npm install obj2pdf --save
```

or

```sh
yarn add obj2pdf
```

# Usage

> **If your Node is serving an Angular application**, make sure you add the assets configuration in your `angular-cli.json` so the app copies the needed assets(fonts) from the package to your `outDir`(`dist` by default) during `ng build`.

```javascript
...
"apps": [
  {
    "root": "src",
    "outDir": "dist",
    "assets": [
      "assets",
      "api",
      "favicon.ico",
      { // add this part
        "glob": "**/*", 
        "input": "../node_modules/obj2pdf/dist/public",
        "output": "/public/"
      }
    ],
...
```

1. Import the package

Typescript:

`import * as obj2pdf from 'obj2json'`

or 

Javascript:

`const obj2pdf = require('obj2json');`

2. Now, simply use the exposed `.generatePDF` function which takes in a valid JSON object as the parameter. It returns a base64 encoded string containing the PDF data.

```javascript
const inputJSON = {
  "heading": "PDF Heading",
  "Employee Details": {
    "First name": "John",
    "Last name": "Doe",
    "Gender": "Male"
  },
  "Employer Details": {
    "Name": "Google",
    "Location": "London"
  },
  "Currency": "£",
  "Amount": 10
};

obj2pdf.generatePDF(inputJSON)
  .then((pdfData) => {
    // do something with pdfData
  })
  .catch((err) => {
    console.log(`error caught : ${err}`);
  });
```
