import Label from '../atoms/Label.jsx'
import Input from '../atoms/Input.jsx'

// MOLECULE: FormField
// ---------------------
// This combines two atoms (Label + Input) into one reusable "field".
// Molecules are small groups of atoms working together for a single purpose.
// This is used inside StudentForm for every single input (Name, Email, etc.)
//
// Props:
// - label       : text shown above the input
// - type        : input type ("text", "email", "number")
// - name        : field name, matches the key in the form's state object
// - value       : current value of the field
// - onChange    : function to call when the value changes
// - placeholder : placeholder text for the input

function FormField({ label, type, name, value, onChange, placeholder }) {
  return (
    <div className="form-field">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormField
