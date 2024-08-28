/* eslint-disable prettier/prettier */
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));

root.render(<h1>Hello, world</h1>);

export  function myImageLoader({ src, width, quality }) {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`

}


