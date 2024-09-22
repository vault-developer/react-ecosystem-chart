import fs from 'fs';

export const writeMarkdownToFile = (markdown) => {
    fs.writeFile('README.md', markdown, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Successfully wrote to README.md');
        }
    });
}
