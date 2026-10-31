// ATOM: Input
// ------------
// A simple reusable text/number input field.
// It doesn't know anything about "students" or forms -
// it just displays a value and reports changes back to its parent.
//
// Props:
// - type        : "text" | "email" | "number" etc.
// - name        : the field name (useful for identifying which field changed)
// - value       : the current value (controlled input)
// - onChange    : function called whenever the user types
// - placeholder : placeholder text shown when empty

function Input({ type = 'text', name, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input-field"
    />
  )
}

export default Input
