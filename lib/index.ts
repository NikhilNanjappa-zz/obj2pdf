import * as pdfMake from 'pdfmake/src/printer';

export function generatePDF(obj: object) {
  return new Promise((resolve) => {
    const fontDescriptors = {
      'Roboto' : {
        normal: 'dist/public/fonts/Roboto-Regular.ttf',
        bold: 'dist/public/fonts/Roboto-Bold.ttf',
        italics: 'dist/public/fonts/Roboto-Italic.ttf',
        bolditalics: 'dist/public/fonts/Roboto-BoldItalic.ttf'
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
      content: []
    };

    // If heading property exists, use it
    if(obj.heading) {
      docDefinition.content.push(
        { text: obj.heading, fontSize: 15, alignment: "center", bold: true, margin: [0, 10] }
      )
    }

    // Margins : [left, top, right, bottom] or [horizontal, vertical]
    for(const prop in obj) {
      if (typeof(obj[prop]) === "object") {
        // Push the obj key as section heading 
        docDefinition.content.push(
          { text: prop, fontSize: 12, bold: true, margin: [0, 10] }
        );

        // Push obj 'value' as sub-section contents
        for(const elem in obj[prop]) {
          docDefinition.content.push(
            { text: elem, fontSize: 10, bold: true },
            { text: obj[prop][elem], fontSize: 8, margin: [ 0, 0, 0, 10 ] }
          );
        }
      } else if (typeof(obj[prop]) === "string" || typeof(obj[prop]) === "number") {
        if(prop !== "heading") {
          docDefinition.content.push(
            { text: prop, fontSize: 12, bold: true, margin: [0, 10, 0, 0] },
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
