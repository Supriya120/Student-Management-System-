// ORGANISM: Navbar
// ------------------
// The top navigation bar. It shows three buttons (Dashboard, Students,
// Add Student) and highlights whichever page is currently active.
//
// This project keeps navigation simple: instead of a routing library,
// App.jsx just stores "currentPage" in state and this Navbar tells it
// which page to switch to when a button is clicked.
//
// Props:
// - currentPage : the name of the page currently shown ("dashboard" | "students" | "add-student")
// - onNavigate  : function(pageName) called when a nav button is clicked

function Navbar({ currentPage, onNavigate }) {
  // List of nav items, so we don't repeat the same button markup 3 times
  const navItems = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'students', label: 'Students' },
    { key: 'add-student', label: 'Add Student' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-brand">🎓 Student MS</div>
      <div className="navbar-links">
        {navItems.map((item) => (
          <button
            key={item.key}
            className={currentPage === item.key ? 'active' : ''}
            onClick={() => onNavigate(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
