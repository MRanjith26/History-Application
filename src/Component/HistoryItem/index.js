import './index.css'

const HistoryItem = props => {
  const {history, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = history
  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="logo-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="domain-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
