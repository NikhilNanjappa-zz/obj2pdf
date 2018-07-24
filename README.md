# obj2pdf
A server-side npm package to convert a JSON object to a PDF.

[![Build Status](https://travis-ci.org/NikhilNanjappa/obj2pdf.svg?branch=master)](https://travis-ci.org/NikhilNanjappa/obj2pdf)
[![Coverage Status](https://coveralls.io/repos/github/NikhilNanjappa/obj2pdf/badge.svg?branch=master)](https://coveralls.io/github/NikhilNanjappa/obj2pdf?branch=master)
[![npm version](https://badge.fury.io/js/obj2pdf.svg)](https://badge.fury.io/js/obj2pdf)

<!-- TOC -->
<!-- Generated PDF image -->
<!-- How to use base64 data -->
<!-- PDF specs like font sizes, allowed types, how to get 'heading' etc -->

# Dependencies

This package is dependent on the [`pdfmake`](https://github.com/bpampuch/pdfmake) package.

# Installation

```shell
npm install obj2pdf --save
```

or

```shell
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

# How to use the base64 string

The base64 encoded string response should look something like

```
data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9Q...
```

This can then be used on client-side as the value to a `href` attribute of a HTML anchor element.

```html
<a href="data:application/pdf;base64,JVBERi0xLjc…">
  Open PDF
</a>
```

# PDF Sample

If you used the JSON above, the generated PDF data upon viewing should look like

![PDF Sample](https://github.com/NikhilNanjappa/obj2pdf/blob/master/lib/obj2pdf_sample.PNG "PDF Sample")