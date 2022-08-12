export default function Button({ type, text, onClick }) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>{text}</button>
  )
}