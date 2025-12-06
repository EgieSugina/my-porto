const mammoth = require('mammoth');
const fs = require('fs');

mammoth.extractRawText({ path: 'Format CV NTI (1) 1.docx' })
    .then(result => {
        console.log(result.value);
    })
    .catch(err => {
        console.error(err);
    });
