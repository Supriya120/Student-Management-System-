import Navbar from '../organisms/Navbar.jsx'

// TEMPLATE: StudentLayout
// --------------------------
// Same idea as DashboardLayout: a reusable page skeleton with the Navbar
// on top and a content area below. Used by StudentsPage and AddStudentPage.
//
// Having two separate templates (even though they look identical right now)
// makes it easy later to give "student" pages a different layout
// (e.g. a sidebar) without touching the Dashboard.
//
// Props:
// - currentPage : which nav item should be highlighted
// - onNavigate  : function to switch pages
// - children    : the actual page content to render below the Navbar

function StudentLayout({ currentPage, onNavigate, children }) {
  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main>{children}</main>
    </div>
  )
}

export default StudentLayout
