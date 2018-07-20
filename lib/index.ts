import * as pdfMake from 'pdfmake/src/printer';

export function generatePDF(obj: object) {
  return new Promise((resolve) => {
    const fontDescriptors = {
      'Roboto' : {
        normal: 'public/fonts/Roboto-Regular.ttf',
        bold: 'public/fonts/Roboto-Bold.ttf',
        italics: 'public/fonts/Roboto-Italic.ttf',
        bolditalics: 'public/fonts/Roboto-BoldItalic.ttf'
      }
    };

    const printer = new pdfMake(fontDescriptors);
    const doc = printer.createPdfKitDocument(createDocDefinition(obj));
    
    let chunks: any = [];

    doc.on('data', (chunk) => {
      chunks.push(chunk);
    });
  
    doc.on('end', () => {
      const result = Buffer.concat(chunks);
      resolve('data:application/pdf;base64,' + result.toString('base64'));
    });
    
    doc.end();
  });
}

const createDocDefinition = (obj: any) => {
  try {

    let docDefinition: any = {
      content: [
        { text: obj.heading, fontSize: 15, alignment: "center", bold: true, margin: [0, 10] }
      ]
    };

    for(const prop in obj) {
      if (typeof(obj[prop]) === "object") {
        // Push the obj key as section heading 
        docDefinition.content.push(
          { text: prop, fontSize: 12, bold: true, margin: [0, 10] }
        );

        // Push obj values as section contents
        for(const elem in obj[prop]) {
          docDefinition.content.push(
            { text: elem, fontSize: 10, bold: true },
            { text: obj[prop][elem], fontSize: 8, margin: [ 0, 0, 0, 10 ] }
          );
        }
      } else if (typeof(obj[prop]) === "string" || typeof(obj[prop]) === "number") {
        if(prop !== "heading") {
          docDefinition.content.push(
            { text: prop, fontSize: 10, bold: true, margin: [0, 10] },
            { text: obj[prop], fontSize: 8, margin: [ 0, 0, 0, 10 ] }
          );
        }
      }
    }
  
    return docDefinition;
  } catch (err) {
    console.log(`createDocDefinition error : ${err}`);
  }
}
