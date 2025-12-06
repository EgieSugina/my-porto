import mammoth from 'mammoth';
import fs from 'fs';

mammoth.extractRawText({ path: 'Format CV NTI (1) 1.docx' })
    .then(result => {
        fs.writeFileSync('cv-content.txt', result.value);
        console.log('CV content saved to cv-content.txt');
    })
    .catch(err => {
        console.error(err);
    });
