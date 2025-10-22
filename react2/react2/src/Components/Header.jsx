import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#0d6efd",
        color: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo хэсэг */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          letterSpacing: "1px",
          cursor: "pointer",
        }}
      >
        <Link to="/">MyLogo</Link>
      </div>

      {/* Navigation menu */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
          margin: 0,
          padding: 0,
        }}
      >
        <li
          style={{
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#ffc107")}
          onMouseOut={(e) => (e.currentTarget.style.color = "white")}
        >
          <Link to="/profiles">Profile</Link>
        </li>
        <li
          style={{
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#ffc107")}
          onMouseOut={(e) => (e.currentTarget.style.color = "white")}
        >
          <Link to="/form">Санал хүсэлт</Link>
        </li>
        <li
          style={{
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#ffc107")}
          onMouseOut={(e) => (e.currentTarget.style.color = "white")}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
