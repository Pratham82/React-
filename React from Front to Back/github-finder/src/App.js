import React, { Component } from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import axios from "axios"

class App extends Component {
  state = {
    data: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get("https://api.github.com/users")
    this.setState({ data: res.data, loading: false })

    console.log("ComponentDidMount() called")
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users user={this.state.data} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}

export default App
