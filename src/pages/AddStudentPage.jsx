import StudentLayout from '../components/templates/StudentLayout.jsx'
import StudentForm from '../components/organisms/StudentForm.jsx'
import Heading from '../components/atoms/Heading.jsx'

// PAGE: AddStudentPage
// -----------------------
// Shows the StudentForm organism so the user can add a new student.
// The actual "adding to the list" logic lives in App.jsx - this page
// just passes that function down to the form.
//
// Props:
// - onAddStudent : function(newStudent) called when the form is submitted
// - currentPage  : passed straight through to the layout/Navbar
// - onNavigate   : passed straight through to the layout/Navbar

function AddStudentPage({ onAddStudent, currentPage, onNavigate }) {
  return (
    <StudentLayout currentPage={currentPage} onNavigate={onNavigate}>
      <div className="card">
        <Heading level={2}>Add a New Student</Heading>
        <StudentForm onAddStudent={onAddStudent} />
      </div>
    </StudentLayout>
  )
}

export default AddStudentPage
