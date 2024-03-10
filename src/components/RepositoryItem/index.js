// Write your code here

import './index.css'

const RepositaryItem = props => {
  const {each} = props
  const {avatarUrl, forksCount, issueCount, name, starsCount} = each
  return (
    <div className="column">
      <img src={avatarUrl} alt="open issues" />
      <h1>{name}</h1>
      <div className="row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="stars-1"
        />
        <p>{starsCount}</p>
      </div>
      <div className="row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
          className="stars-1"
        />
        <p>{forksCount}</p>
      </div>
      <div className="row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="issues count"
          className="stars-1"
        />
        <p>{issueCount}</p>
      </div>
    </div>
  )
}

export default RepositaryItem
