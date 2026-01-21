const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, 'dist/index.css');
const jsPathMjs = path.resolve(__dirname, 'dist/index.mjs');
const jsPathCjs = path.resolve(__dirname, 'dist/index.js');

try {
    let css = fs.readFileSync(cssPath, 'utf8');
    // Escape backticks and backslashes for JS string interpolation
    // css = css.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
    const cssAsJsString = JSON.stringify(css);


    [jsPathMjs, jsPathCjs].forEach(jsPath => {
        if (fs.existsSync(jsPath)) {
            let js = fs.readFileSync(jsPath, 'utf8');
            // Try matching double quotes first (common in build output)
            js = js.replace('"__CSS_CONTENT_PLACEHOLDER__"', cssAsJsString);
            // Try matching backticks (if preserved)
            js = js.replace('`__CSS_CONTENT_PLACEHOLDER__`', cssAsJsString);
            // Try matching single quotes
            js = js.replace("'__CSS_CONTENT_PLACEHOLDER__'", cssAsJsString);

            fs.writeFileSync(jsPath, js);
            console.log(`Injected CSS into ${jsPath}`);
        }
    });
} catch (error) {
    console.error('Error injecting CSS:', error);
    process.exit(1);
}
