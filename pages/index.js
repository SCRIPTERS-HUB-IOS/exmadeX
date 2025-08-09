import Link from 'next/link';

export default function Home({ brightness, setBrightness }) {
  return (
    <main className="wrap">
      <header className="hdr">
        <div className="logo">exmade</div>
        <div className="hdr-actions">
          <label htmlFor="brightness">Brightness</label>
          <input
            id="brightness"
            type="range"
            min="0.5"
            max="1.5"
            step="0.05"
            value={brightness}
            onChange={(e) => setBrightness(parseFloat(e.target.value))}
            aria-label="Brightness control"
          />
          <div className="social-btns">
            <a
              href="https://youtube.com/@scripthubroblox5?si=iDCVMWin2pYph-oN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-btn"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.tiktok.com/@teageabusiness?_t=ZS-8yj4E9OB5d3&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="social-btn"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
      </header>

      <section className="content">
        <h2 className="title">Our Sites</h2>

        <div className="btn-row">
          <Link href="/methods">
            <a className="btn">Methods</a>
          </Link>
          <a
            className="btn discord"
            href="https://discord.gg/4tvp8V9pBJ"
            target="_blank"
            rel="noreferrer noopener"
          >
            Join our DISCORD
          </a>
        </div>
      </section>

      <footer className="footer-space" />
    </main>
  );
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FF0000"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M23.5 6.2a2.88 2.88 0 0 0-2.02-2.04C19.5 3.75 12 3.75 12 3.75s-7.5 0-9.48.41a2.88 2.88 0 0 0-2.02 2.04A30.01 30.01 0 0 0 0 12a30.01 30.01 0 0 0 .5 5.8 2.88 2.88 0 0 0 2.02 2.04c1.98.41 9.48.41 9.48.41s7.5 0 9.48-.41a2.88 2.88 0 0 0 2.02-2.04A30.01 30.01 0 0 0 24 12a30.01 30.01 0 0 0-.5-5.8zM9.75 15.02V8.98l5.25 3.02-5.25 3.02z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fill="#000"
        d="M9.865 2.39h2.49v6.27a4.82 4.82 0 01-4.03-4.76v-1.5h1.54z"
      />
      <path
        fill="#000"
        d="M7.865 11.6a5.38 5.38 0 005.37 5.42 5.41 5.41 0 005.38-5.38v-3.23h-2.57a2.84 2.84 0 01-2.82-2.8v-5.5H9.35v9.2a5.41 5.41 0 01-1.484 3.9z"
      />
    </svg>
  );
}
