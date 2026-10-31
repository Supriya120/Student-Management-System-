// ATOM: Heading
// --------------
// A reusable heading component so we don't repeat <h1>, <h2>, <h3> everywhere.
// It picks which HTML tag to render based on the "level" prop.
//
// Props:
// - level    : 1 | 2 | 3 -> decides if it renders <h1>, <h2> or <h3>
// - children : the heading text

function Heading({ level = 2, children }) {
  const Tag = `h${level}` // e.g. "h1", "h2", "h3"
  return <Tag>{children}</Tag>
}

export default Heading
