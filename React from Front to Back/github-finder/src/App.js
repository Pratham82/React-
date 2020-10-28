import React, { Component } from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import axios from "axios"
import Search from "./components/users/Search"

class App extends Component {
  state = {
    data: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({ data: res.data, loading: false })
  }

  searchUser = async (text) => {
    this.setState({ loading: true })
    const userInfo = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({ data: userInfo.data.items, loading: false })
  }

  clearUser = () => this.setState({ data: [], loading: false })

  render() {
    const { data, loading } = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUser={this.searchUser}
            clearUser={this.clearUser}
            showClear={data.length > 0 ? true : false}
          />
          <Users users={data} loading={loading} />
        </div>
      </div>
    )
  }
}

export default App
