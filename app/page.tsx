const WAITLIST_URL = "https://forms.gle/sEM9ij2CmKxKw7Js8";

export default function Home() {
  return (
    <main className="landing">
      <div className="texture" aria-hidden="true" />

      <div className="content">
        <h1 className="brand">
          <span className="brand-typing">
            <span className="brand-text">settify</span>
            <span className="brand-dot">.</span>
            <span className="brand-text">ai</span>
          </span>
        </h1>

        <a
          className="waitlist-link"
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join waitlist
        </a>
      </div>

      <footer className="footer">
        <a href="/privacy">Privacy policy</a>
      </footer>
    </main>
  );
}
