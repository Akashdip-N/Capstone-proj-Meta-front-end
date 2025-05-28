import './Nav.css';

function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">MyApp</a>
        <ul className="links">
          <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;