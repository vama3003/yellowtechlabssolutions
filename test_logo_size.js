const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'about.html',
    'contact.html',
    'portfolio.html',
    'products.html',
    'services.html'
];

const verifyLogo = (filePath) => {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Regex to match the logo image tag with specific src and style
        // We are looking for something like: <img src="images/finallogo.png" alt="YellowTechLabs" style="height: 80px; width: auto;">
        // Whitespace might vary, so be a bit flexible.
        const logoRegex = /<img\s+src="images\/finallogo\.png"\s+alt="YellowTechLabs"\s+style="height:\s*80px;\s*width:\s*auto;"\s*>/;

        if (logoRegex.test(content)) {
            console.log(`[PASS] ${filePath}: Logo is correct (finallogo.png, 80px).`);
            return true;
        } else {
            console.error(`[FAIL] ${filePath}: Logo is incorrect.`);
            // check what might be wrong
            if (content.includes('images/finallogo.png')) {
                console.error(`   - src is correct.`);
            } else {
                console.error(`   - src is WRONG.`);
            }
            if (content.includes('height: 80px')) {
                console.error(`   - height is correct.`);
            } else {
                console.error(`   - height is WRONG.`);
            }
            return false;
        }
    } catch (err) {
        console.error(`[ERROR] ${filePath}: could not read file. ${err.message}`);
        return false;
    }
};

let allPassed = true;
console.log('--- Starting Logo Auto-Verification ---');
const baseDir = process.cwd();

files.forEach(file => {
    const fullPath = path.join(baseDir, file);
    if (!verifyLogo(fullPath)) {
        allPassed = false;
    }
});

if (allPassed) {
    console.log('--- Verification SUCCESS: All files have the correct logo and size. ---');
    process.exit(0);
} else {
    console.log('--- Verification FAILED: Some files are incorrect. ---');
    process.exit(1);
}
