# obj2pdf
A npm package to convert a JSON object to a PDF.

> CURRENTLY UNDER CONSTRUCTION

[![Build Status](https://travis-ci.org/NikhilNanjappa/obj2pdf.svg?branch=master)](https://travis-ci.org/NikhilNanjappa/obj2pdf)
[![Coverage Status](https://coveralls.io/repos/github/NikhilNanjappa/obj2pdf/badge.svg?branch=master)](https://coveralls.io/github/NikhilNanjappa/obj2pdf?branch=master)
[![npm version](https://badge.fury.io/js/obj2json.svg)](https://badge.fury.io/js/obj2json)

# Usage

Import the package

`import * as obj2pdf from 'obj2json'`

next, use the `.generatePDF` function passing a valid JSON object to get a base64 string with PDF data as the response.

```
index.generatePDF(inputJSON)
  .then((pdfData) => {
    // do something with pdfData
  })
  .catch((err) => {
    console.log(`error caught : ${err}`);
  });
```
