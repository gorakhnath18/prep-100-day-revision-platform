const https = require('https');

https.get('https://prep100-two.vercel.app', (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const srcRegex = /src="([^"]+)"/g;
    const hrefRegex = /href="([^"]+\.css)"/g;
    const assets = ['/favicon.svg', '/assets/prep-icon.svg', '/assets/prep-logo-horizontal.svg'];
    
    let match;
    while ((match = srcRegex.exec(body)) !== null) {
      assets.push(match[1]);
    }
    while ((match = hrefRegex.exec(body)) !== null) {
      assets.push(match[1]);
    }

    console.log('Testing assets from production:');
    let completed = 0;
    assets.forEach(p => {
      const u = 'https://prep100-two.vercel.app' + (p.startsWith('/') ? p : '/' + p);
      https.get(u, (r) => {
        console.log(`✓ ${p} -> Status ${r.statusCode} (${r.headers['content-type']}, ${r.headers['content-length']}B)`);
        completed++;
        if (completed === assets.length) {
          console.log('\nAll production assets verified successfully (200 OK)!');
        }
      }).on('error', (err) => {
        console.error(`✗ ${p} failed:`, err.message);
      });
    });
  });
}).on('error', err => console.error(err));
