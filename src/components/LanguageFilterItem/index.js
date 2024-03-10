// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {each, sendingDetails} = props

  const {id, language} = each

  const gettingRepositaryItem = () => {
    sendingDetails(id)
  }

  return (
    <li>
      <button type="button" onClick={gettingRepositaryItem}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
