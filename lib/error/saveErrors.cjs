const fs = require('fs');
const path = require('path');
const { dataErr } = require('./ErrorBoundary');
const saveErrorsToFile = () => {
    const filePath = path.join(__dirname, 'errors.json');
    const jsonData = JSON.stringify(dataErr, null, 2);
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        }
        else {
            console.log('Errors successfully saved to errors.json');
        }
    });
};
saveErrorsToFile();
export {};
//# sourceMappingURL=saveErrors.cjs.map