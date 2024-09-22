import {charts} from "./charts.data.js";
import {columns} from "./columns.data.js";
import {writeMarkdownToFile} from "./write.js";

function formatCell(column, framework) {
    switch (column.type) {
        case 'title':
            return `[${framework.name}](https://github.com/${framework.repo})`;
        case 'badge': {
            return `![${column.key}](https://img.shields.io/github/${column.key}/${framework.repo}?style=flat&label=&color=${column.color})`;
        }
        case 'boolean-badge':
            return  `![react-only](https://img.shields.io/badge/-${framework.reactOnly ? 'yes-gray' : 'no-green' })`;
        default:
            throw new Error(`Unknown column type ${column.type}`);
    }
}

function generateMarkdownTable() {
    let markdown = '';

    charts.forEach(category => {
        markdown += `## ${category.category}\n\n`;
        markdown += `| ${columns.map(col => col.title).join(' | ')} |\n`;
        markdown += `| ${columns.map(() => '----').join(' | ')} |\n`;

        category.items.forEach(framework => {
            const row = columns.map(col => formatCell(col, framework));
            markdown += `| ${row.join(' | ')} |\n`;
        });

        markdown += '\n';
    });

    return markdown;
}

const markdown = generateMarkdownTable();
writeMarkdownToFile(markdown);