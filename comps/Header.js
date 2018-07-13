import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <header>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <style jsx>{`
          h1, a {
            font-family: "Arial";
          }
          header a {
            border: 1px solid black;
            padding 3px 6px;
            color: black
          }
          a {
            text-decoration: none;
            color: blue;
          }
          header a:hover {
            opacity: 0.6;
            border: 1px solid rgba(0,0,0,0.6);
          }
        `}</style>
    </header>
)

export default Header
