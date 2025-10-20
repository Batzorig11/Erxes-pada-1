import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <button>
          <img src="logo" />
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
      <button className="mode">
        <img src="" alt="" />
      </button>
    </div>
  );
}
