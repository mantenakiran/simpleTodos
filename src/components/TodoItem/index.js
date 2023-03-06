// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, deleteUser} = props
  const {title, id} = userDetails

  const onDeleteTodo = () => {
    deleteUser(id)
  }

  return (
    <li className="list-items">
      <p className="title">{title}</p>
      <button onClick={onDeleteTodo} type="button" className="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
