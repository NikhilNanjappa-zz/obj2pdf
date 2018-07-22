# obj2pdf
A server-side npm package to convert a JSON object to a PDF.

[![Build Status](https://travis-ci.org/NikhilNanjappa/obj2pdf.svg?branch=master)](https://travis-ci.org/NikhilNanjappa/obj2pdf)
[![Coverage Status](https://coveralls.io/repos/github/NikhilNanjappa/obj2pdf/badge.svg?branch=master)](https://coveralls.io/github/NikhilNanjappa/obj2pdf?branch=master)
[![npm version](https://badge.fury.io/js/obj2json.svg)](https://badge.fury.io/js/obj2json)

> CURRENTLY UNDER CONSTRUCTION

# Usage

Import the package

`import * as obj2pdf from 'obj2json'`

next, use the `.generatePDF` function passing a valid JSON object to get a base64 string containing PDF data as the response.

```
obj2pdf.generatePDF(inputJSON)
  .then((pdfData) => {
    // do something with pdfData
  })
  .catch((err) => {
    console.log(`error caught : ${err}`);
  });
```
