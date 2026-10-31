// ATOM: Button
// -------------
// This is the smallest reusable piece for clickable actions.
// It just renders a plain <button> but lets other components
// customize the text, click behavior, type and style (variant).
//
// Props:
// - children  : the text/content shown inside the button
// - onClick   : function to run when the button is clicked
// - type      : "button" | "submit" (defaults to "button")
// - variant   : "primary" | "danger" -> controls the CSS class/color

function Button({ children, onClick, type = 'button', variant = 'primary' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  )
}

export default Button
