import { useState } from 'react'
import SearchBar from '../molecules/SearchBar.jsx'
import StudentCard from '../molecules/StudentCard.jsx'

// ORGANISM: StudentList
// ------------------------
// A complete section that shows every student as a StudentCard,
// with a SearchBar on top to filter by name.
//
// This organism manages its own "search text" state (useState),
// but the actual list of students and the delete logic live in App.jsx
// and are passed down as props. This shows how state can live at
// different levels depending on who needs it.
//
// Props:
// - students        : array of student objects
// - onDeleteStudent : function(id) called when a card's Delete button is clicked

function StudentList({ students, onDeleteStudent }) {
  const [searchText, setSearchText] = useState('')

  // Filter the students list based on the search text (case-insensitive)
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div>
      <SearchBar
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {filteredStudents.length === 0 ? (
        <p className="empty-text">No students found.</p>
      ) : (
        filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onDelete={onDeleteStudent}
          />
        ))
      )}
    </div>
  )
}

export default StudentList
