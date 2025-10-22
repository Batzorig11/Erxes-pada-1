import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <button className="bold">
          <img src="/paw-xxl.png" />
          Takuya Matsuyama
        </button>
      </Link>
      <Link to="/works">
        <button>Works</button>
      </Link>
      <Link to="/wallpaper">
        <button>Wallpaper</button>
      </Link>
      <Link to="/posts">
        <button>Posts</button>
      </Link>
      <Link to="/uses">
        <button>Uses</button>
      </Link>
      <Link to="/source">
        <button>
          <img src="" />
          Source
        </button>
      </Link>
      <button className="mode"></button>
    </div>
  );
}
