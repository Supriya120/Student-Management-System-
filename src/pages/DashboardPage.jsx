import DashboardLayout from '../components/templates/DashboardLayout.jsx'
import Heading from '../components/atoms/Heading.jsx'

// PAGE: DashboardPage
// ----------------------
// A "page" plugs real data into a template. This page shows:
// 1. A welcome message
// 2. The total number of students (calculated from the students array)
//
// Props:
// - totalStudents : number of students currently in the list
// - currentPage    : passed straight through to the layout/Navbar
// - onNavigate     : passed straight through to the layout/Navbar

function DashboardPage({ totalStudents, totalCourses, currentPage, onNavigate }) {
  return (
    <DashboardLayout currentPage={currentPage} onNavigate={onNavigate}>
      <div className="card">
        <Heading level={1}>Welcome to the Student Management System</Heading>
        <p>Manage your students easily: view, add, and remove records.</p>
      </div>

      <div className="stats-row">
        <div className="stats-box">
          <p>Total Students</p>
          <p className="stats-number">{totalStudents}</p>
        </div>
        <div className="stats-box stats-box-secondary">
          <p>Courses Offered</p>
          <p className="stats-number">{totalCourses}</p>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage
