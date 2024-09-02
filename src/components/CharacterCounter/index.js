import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {charsList: [], userTxt: ''}

  handleUserTxt = event => {
    this.setState({userTxt: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {userTxt} = this.state
    const newObj = {
      id: uuidv4(),
      txt: userTxt,
      len: userTxt.length,
    }
    this.setState(prevState => ({
      charsList: [...prevState.charsList, newObj],
      userTxt: '',
    }))
  }

  render() {
    const {charsList, userTxt} = this.state
    return (
      <div className="main-container">
        <div className="left-container">
          <div className="heading-container">
            <h1>Count the characters like a Boss...</h1>
          </div>
          <div className="img-container">
            {charsList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul>
                {charsList.map(each => (
                  <li key={each.id} className="li-ele">
                    <p>
                      {each.txt}: {each.len}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="right-container">
          <h1>Character Counter</h1>
          <form
            className="input-and-add-btn-container"
            onSubmit={this.onClickAdd}
          >
            <input
              placeholder="Enter the Characters here"
              className="input-ele"
              type="text"
              onChange={this.handleUserTxt}
              value={userTxt}
            />
            <div>
              <button className="cstm-btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
