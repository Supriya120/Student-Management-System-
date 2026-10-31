import { useState } from 'react'
import FormField from '../molecules/FormField.jsx'
import Button from '../atoms/Button.jsx'

// ORGANISM: StudentForm
// ------------------------
// This is a bigger, self-contained section of the UI: a full form
// made up of several FormField molecules + a submit Button atom.
//
// It manages its OWN local state (the values typed into the form)
// using useState. When the user clicks "Add Student", it packages up
// the values and sends them to the parent via the onAddStudent prop.
// The parent (AddStudentPage -> App) decides what to actually do with it
// (in our case, add it to the main students list).
//
// Props:
// - onAddStudent : function(newStudent) called when the form is submitted

function StudentForm({ onAddStudent }) {
  // Local state for the form fields. Starts empty.
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: '',
    course: '',
    age: '',
  })

  // Generic change handler shared by all fields.
  // "name" comes from the input's "name" attribute (e.g. "name", "email"...)
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Runs when the form is submitted (user clicks "Add Student")
  const handleSubmit = (event) => {
    event.preventDefault() // stop the page from refreshing

    // Very simple validation: make sure required fields are not empty
    if (!formData.name || !formData.id || !formData.email) {
      alert('Please fill in at least Name, Student ID and Email.')
      return
    }

    // Send the new student data up to the parent component
    onAddStudent({
      ...formData,
      age: Number(formData.age) || 0, // convert age to a number
    })

    // Clear the form after successful submit
    setFormData({ name: '', id: '', email: '', course: '', age: '' })
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g. Aarav Sharma"
      />
      <FormField
        label="Student ID"
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="e.g. STU005"
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="e.g. student@example.com"
      />
      <FormField
        label="Course"
        type="text"
        name="course"
        value={formData.course}
        onChange={handleChange}
        placeholder="e.g. Computer Science"
      />
      <FormField
        label="Age"
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="e.g. 20"
      />

      <Button type="submit" variant="primary">
        Add Student
      </Button>
    </form>
  )
}

export default StudentForm
