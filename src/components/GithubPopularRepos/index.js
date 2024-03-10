import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

import RepositaryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'Failure',
}

class GithubPopularRepos extends Component {
  state = {
    Data: languageFiltersData[0].id,

    relevantList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.filteringData()
  }

  filteringData = async () => {
    const {Data} = this.state
    console.log(Data)
    const url = `https://apis.ccbp.in/popular-repos?language=${Data}`

    const gettingData = await fetch(url)
    const response = await gettingData.json()
    console.log(gettingData)
    if (gettingData.ok === true) {
      const newData = response.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,

        forksCount: each.forks_count,

        issueCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
        id: each.id,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        relevantList: newData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  sendingDetails = language => {
    this.setState({Data: language}, this.filteringData)
  }

  success = () => {
    const {relevantList} = this.state
    return (
      <ul className="stars-1">
        {relevantList.map(each => (
          <RepositaryItem each={each} key={each.id} />
        ))}
      </ul>
    )
  }

  failure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="open issues"
      />
    </div>
  )

  initial = () => {
    ;<div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  }

  gettingLastItems = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.initial:
        return this.initial()
      case apiStatusConstants.success:
        return this.success()
      case apiStatusConstants.failure:
        return this.failure()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    console.log(apiStatus)
    return (
      <div className="main-container">
        <h1>Popular</h1>
        <ul className="rowing">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              each={each}
              key={each.id}
              sendingDetails={this.sendingDetails}
            />
          ))}{' '}
        </ul>
        {this.gettingLastItems()}
      </div>
    )
  }
}

export default GithubPopularRepos
