// ATOM: Label
// ------------
// A simple text label, usually placed above an Input.
//
// Props:
// - children : the label text
// - htmlFor  : (optional) links the label to an input's "id" for accessibility

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  )
}

export default Label
