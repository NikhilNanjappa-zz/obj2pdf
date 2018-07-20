'use strict';
const expect = require('chai').expect;
const index = require('../dist/index.js');
const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

describe('JSON2PDF', () => {
  it('should return a base64 string', () => {

    const inputJSON = {
      "heading": "PDF Heading",
      "Customer Details": {
        "Name": "Nikhil",
        "Gender": "Male"
      },
      "Customer calculated currency": "£",
      "Customer calculated amount": 200
    };  

    index.generatePDF(inputJSON)
      .then((response) => {
        // console.log("response is : ", response);
        expect(base64regex.test(response.split('base64,')[1])).to.be.true;
      })
      .catch((err) => {
        console.log("error is : ", err);
      });

  });
});

// this.generatePdf(claimantDetails, (response) => {
//   // doc successfully created
//   console.log("doc successfully created");
// }, (error) => {
//   // error from creating doc
//   console.log("error from creating doc");
// });

// return guaranteeCredit;

// } catch(err) {
// console.log(err);
// }

// };

// createDocDefinition = (claimantDetails) => {

// const relationshipStatus = (claimantDetails.couple === "true") ? "Yes" : "No";

// let docDefinition = {
// content: [
//   { image: './public/img/pdf-dwp-logo.PNG', width: 60, height: 40, alignment: "right" },
//   { text: "Pension Credit Summary", fontSize: 15, bold: true, alignment: "right", margin: [0, 10] },
//   { text: "Personal Details", fontSize: 15, decoration: "underline", margin: [0, 10] },
//   { text: "Date of Birth", fontSize: 10, bold: true },
//   { text: claimantDetails.claimantDOB, fontSize: 8, margin: [ 0, 0, 0, 10 ] },
//   { text: "Partner", fontSize: 10, bold: true },
//   { text: relationshipStatus, fontSize: 8, margin: [ 0, 0, 0, 10 ] },
//   { text: "Claim Date", fontSize: 10, bold: true },
//   { text: claimantDetails.claimDate, fontSize: 8, margin: [ 0, 0, 0, 10 ] },
//   { text: "Weekly State Pension", fontSize: 10, bold: true },
//   { text: claimantDetails.weeklyStatePension, fontSize: 8, margin: [ 0, 0, 0, 10 ] },
//   { text: "Child Addition Amount", fontSize: 10, bold: true },
//   { text: claimantDetails.childAdditionAmount, fontSize: 8, margin: [ 0, 0, 0, 10 ] },
//   { text: "Child Benefit Amount", fontSize: 10, bold: true },
//   { text: claimantDetails.childBenefitAmount, fontSize: 8, margin: [ 0, 0, 0, 10 ] },
//   { text: "Appropriate Amount", fontSize: 10, bold: true },
//   { text: claimantDetails.appropriateAmount, fontSize: 8, margin: [ 0, 0, 0, 10 ] },
//   { text: "Weekly Income Amount", fontSize: 10, bold: true },
//   { text: claimantDetails.weeklyIncome, fontSize: 8, margin: [ 0, 0, 0, 10 ] },
//   { text: "Guarantee Credit Amount", fontSize: 10, bold: true },
//   { text: claimantDetails.guaranteeCredit, fontSize: 8, margin: [ 0, 0, 0, 10 ] },
//   { text: "Children Review Dates", fontSize: 15, decoration: "underline", margin: [0, 10] },
//   {
//     table: {
//       headerRows: 1,
//       widths: [ '50%', '50%' ],
//       body: [
//         [ 
//           { text: "Date of Birth", fontSize: 10, bold: true }, 
//           { text: "Review Date", fontSize: 10, bold: true } 
//         ]
//       ]
//     }
//   }
// ]
// };

// claimantDetails.childrenDetailsArray.forEach((child) => {
// if(child.entitled) {
//   docDefinition.content[docDefinition.content.length-1].table.body.push([
//     { text: child.childDOB, fontSize: 8 }, { text: child.reviewDate, fontSize: 8 }
//   ]);
// } else {
//   docDefinition.content[docDefinition.content.length-1].table.body.push([
//     { text: child.childDOB, fontSize: 8 }, { text: "Child not entitled", fontSize: 8 }
//   ]);
// }
// });

// return docDefinition;
// };

// module.exports.generatePdf = (claimantDetails, successCallback, errorCallback) => {

// try {

// const fontDescriptors = {
//   Roboto: {
//     normal: path.join(__dirname, '../..', 'public', '/fonts/v1-458f8ea81c-light.woff'),
//     bold: path.join(__dirname, '../..', 'public', '/fonts/v1-f38c792ac2-bold.woff'),
//     italics: path.join(__dirname, '../..', 'public', '/fonts/v1-62cc6f0a28-tabular-light.woff'),
//     bolditalics: path.join(__dirname, '../..', 'public', '/fonts/v1-784c21afb8-tabular-bold.woff')
//   }
// };

// const printer = new pdfMake(fontDescriptors);
// const doc = printer.createPdfKitDocument(createDocDefinition(claimantDetails));

// doc.pipe(
//   fs.createWriteStream("docs/final.pdf").on("error", (err) => {
//     errorCallback(err.message);
//   })
// );

// doc.on("end", () => {
//   successCallback("PDF successfully created and stored");
// });

// doc.end();
// } catch(err) {
// console.log(err);
// throw(err);
// }

// };



// let docDefinition = {
//   content: [
//     { image: './public/img/pdf-dwp-logo.PNG', width: 75, height: 50 },
//     { text: obj.heading, fontSize: 15, margin: [0, 10] }
//   ]
// };

// for(var prop in obj) {
//   if (typeof(obj[prop]) === "object") {
//     docDefinition.content.push({ text: prop, fontSize: 15, bold: true, margin: [0, 10] });

//     for(var elem in obj[prop]) {
//       docDefinition.content.push(
//         { text: elem, fontSize: 10, bold: true },
//         { text: obj[prop][elem], fontSize: 8, margin: [ 0, 0, 0, 10 ] }
//       );
//     }
//   }
// }

// console.log(docDefinition);