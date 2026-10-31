import Button from '../atoms/Button.jsx'

// MOLECULE: StudentCard
// -----------------------
// Displays ONE student's details as a small card, plus a "Delete" button.
// This combines an atom (Button) with plain markup to show student info.
//
// Props:
// - student  : an object like { id, name, email, course, age }
// - onDelete : function to call (with the student's id) when Delete is clicked

function StudentCard({ student, onDelete }) {
  // Take the first letter of the student's name to show as a simple avatar
  const initial = student.name ? student.name.charAt(0).toUpperCase() : '?'

  return (
    <div className="student-card">
      <div className="student-card-left">
        <div className="student-avatar">{initial}</div>
        <div className="student-card-info">
          <p className="student-name">{student.name}</p>
          <p className="student-id">ID: {student.id}</p>
          <p>{student.email}</p>
          <div className="student-meta">
            <span className="badge">{student.course}</span>
            <span className="badge badge-muted">Age: {student.age}</span>
          </div>
        </div>
      </div>

      {/* When clicked, tell the parent component which student to remove */}
      <Button variant="danger" onClick={() => onDelete(student.id)}>
        Delete
      </Button>
    </div>
  )
}

export default StudentCard
