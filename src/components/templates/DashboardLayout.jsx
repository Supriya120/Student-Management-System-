import Navbar from '../organisms/Navbar.jsx'

// TEMPLATE: DashboardLayout
// ----------------------------
// Templates arrange organisms into a page-level skeleton/layout,
// but they don't contain real data themselves - they just define
// "where things go". This template is reused by DashboardPage.
//
// Props:
// - currentPage : which nav item should be highlighted
// - onNavigate  : function to switch pages
// - children    : the actual page content to render below the Navbar

function DashboardLayout({ currentPage, onNavigate, children }) {
  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
