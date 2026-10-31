import Input from '../atoms/Input.jsx'

// MOLECULE: SearchBar
// ---------------------
// A single input used to filter/search the student list by name.
// It's a "molecule" because it wraps the Input atom with a specific purpose
// and its own container styling.
//
// Props:
// - value       : the current search text
// - onChange    : function called when the user types
// - placeholder : placeholder text

function SearchBar({ value, onChange, placeholder = 'Search by name...' }) {
  return (
    <div className="search-bar">
      <Input
        type="text"
        name="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchBar
