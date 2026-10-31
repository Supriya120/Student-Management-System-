import StudentLayout from '../components/templates/StudentLayout.jsx'
import StudentList from '../components/organisms/StudentList.jsx'
import Heading from '../components/atoms/Heading.jsx'

// PAGE: StudentsPage
// ---------------------
// Shows the list of all students using the StudentList organism.
// This page doesn't hold the students array itself - it receives it
// as a prop from App.jsx (the "source of truth" for the data).
//
// Props:
// - students        : array of student objects
// - onDeleteStudent : function(id) to remove a student
// - currentPage     : passed straight through to the layout/Navbar
// - onNavigate      : passed straight through to the layout/Navbar

function StudentsPage({ students, onDeleteStudent, currentPage, onNavigate }) {
  return (
    <StudentLayout currentPage={currentPage} onNavigate={onNavigate}>
      <div className="card">
        <div className="section-header">
          <Heading level={2}>Student List</Heading>
          <span className="badge">{students.length} total</span>
        </div>
        <StudentList students={students} onDeleteStudent={onDeleteStudent} />
      </div>
    </StudentLayout>
  )
}

export default StudentsPage
