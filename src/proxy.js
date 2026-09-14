import { NextResponse } from 'next/server';

export function proxy(request) {
  const pathname = request.nextUrl.pathname.toLowerCase().replace(/\/+$/, '') || '/';

  if (pathname === '/industry/hybrid-app') {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>410 - Page Permanently Removed | Appsters</title>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap');
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background-color: #fff;
      color: #ffffff;
      font-family: Big Shoulders,sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      text-align: center;
    }
    .card {
      max-width: 520px;
      width: 100%;
      background: #fff;
      border-radius: 16px;
      padding: 48px 32px;
    }
    .status-code {
      font-size: 100px;
      line-height: 1;
      color: #000;
      letter-spacing: 2px;
      margin-bottom: 12px;
    }
    .actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      border-radius: 9999px;
      font-size: 18px;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .btn-primary {
      background: #cf0;
      color: #000;
    }
    .btn-primary:hover {
      background: #cf0;
    }
    .btn-secondary {
      background: transparent;
      color: #ffffff;
      border: 1px solid #323242;
    }
    .btn-secondary:hover {
      background: #1e1e29;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="status-code">410</div>
    <div class="actions">
      <a href="/" class="btn btn-primary">Go to Homepage</a>
    </div>
  </div>
</body>
</html>`;

    return new NextResponse(html, {
      status: 410,
      statusText: 'Gone',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    });
  }

  return NextResponse.next();
}

export const middleware = proxy;
export default proxy;

export const config = {
  matcher: [
    '/industry/hybrid-app',
    '/industry/hybrid-app/:path*',
  ],
};
