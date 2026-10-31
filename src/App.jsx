import { useState } from 'react'
import initialStudents from './data/students.js'
import DashboardPage from './pages/DashboardPage.jsx'
import StudentsPage from './pages/StudentsPage.jsx'
import AddStudentPage from './pages/AddStudentPage.jsx'

// APP
// -----
// This is the top-level component and the "single source of truth" for:
// 1. The list of students (students state)
// 2. Which page is currently visible (currentPage state)
//
// Why keep this state here instead of inside each page?
// Because multiple pages need access to the SAME students data
// (Dashboard needs the count, Students page needs the full list,
// Add Student page needs to be able to add to it). Lifting the state
// up to the closest common parent (App) and passing it down via props
// is a core React pattern.

function App() {
  // The full list of students. Starts with dummy data from data/students.js
  const [students, setStudents] = useState(initialStudents)

  // Tracks which page is currently displayed.
  // Since this is a simple beginner project, we avoid a routing library
  // and just switch between pages using plain state + conditional rendering.
  const [currentPage, setCurrentPage] = useState('dashboard')

  // Adds a new student to the list.
  // Uses the "spread" syntax to create a NEW array instead of mutating
  // the old one directly - this is the correct way to update state in React.
  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent])
    setCurrentPage('students') // jump to the list so the user sees the result
  }

  // Removes a student by id, again by creating a new filtered array.
  const handleDeleteStudent = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId)
    )
  }

  // Decide which page component to render based on currentPage.
  // This is a very simple alternative to a router - fine for small apps.
  const renderPage = () => {
    switch (currentPage) {
      case 'students':
        return (
          <StudentsPage
            students={students}
            onDeleteStudent={handleDeleteStudent}
            currentPage={currentPage}
            onNavigate={setCurrentPage}
          />
        )
      case 'add-student':
        return (
          <AddStudentPage
            onAddStudent={handleAddStudent}
            currentPage={currentPage}
            onNavigate={setCurrentPage}
          />
        )
      case 'dashboard':
      default: {
        // Count how many DIFFERENT courses are represented in the students list.
        // Set() automatically removes duplicate values, so its size = unique count.
        const uniqueCourses = new Set(students.map((s) => s.course))

        return (
          <DashboardPage
            totalStudents={students.length}
            totalCourses={uniqueCourses.size}
            currentPage={currentPage}
            onNavigate={setCurrentPage}
          />
        )
      }
    }
  }

  return renderPage()
}

export default App
