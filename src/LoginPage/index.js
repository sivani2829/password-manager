// import {Component} from 'react'
// import {v4} from 'uuid'
// import PasswordItem from '../PasswordItem'

// import './index.css'

// class LoginPage extends Component {
//   state = {
//     website: '',
//     user: '',
//     passwords: '',
//     detailsList: [],
//     showpassword: false,
//     searchInput: '',
//   }

//   onChangeWebsite = event => {
//     this.setState({website: event.target.value})
//   }

//   onChangeUser = event => {
//     this.setState({user: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({passwords: event.target.value})
//   }

//   onChangeSearchInput = event => {
//     this.setState({
//       searchInput: event.target.value,
//     })
//   }

//   showPassword = () => {
//     this.setState(prevState => ({
//       showpassword: !prevState.showpassword,
//     }))
//   }

//   addPassword = event => {
//     event.preventDefault()
//     const {website, user, passwords} = this.state
//     const newDetails = {
//       id: v4(),
//       websiteName: website,
//       userName: user,
//       password: passwords,
//     }
//     this.setState(prevState => ({
//       detailsList: [...prevState.detailsList, newDetails],
//       websiteName: '',
//       userName: '',
//       password: '',
//     }))
//   }

//   deleteItem = id => {
//     const {detailsList} = this.state
//     const filtered = detailsList.filter(each => each.id !== id)
//     this.setState({detailsList: filtered})
//   }

//   renderPasswords = () => {
//     const {detailsList, showpassword} = this.state

//     return detailsList.map(each => (
//       <PasswordItem
//         key={each.id}
//         passwordDetails={each}
//         showpassword={showpassword}
//         // deleteItem={this.deleteItem}
//       />
//     ))
//   }

//   render() {
//     const {website, user, passwords, detailsList} = this.state
//     const lengthList = detailsList.length

//     return (
//       <>
//         <div className="app-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
//             alt="app logo"
//             className="logo"
//           />
//           <div className="login-container">
//             <div className="add-password-container">
//               <h1 className="heading">Add New Password</h1>
//               <form onSubmit={this.addPassword}>
//                 <div className="white-box">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
//                     alt="Website"
//                   />
//                   <input
//                     type="text"
//                     htmlFor="website"
//                     placeholder="Enter Website"
//                     onChange={this.onChangeWebsite}
//                     value={website}
//                   />
//                 </div>

//                 <div className="white-box">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
//                     alt="username"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Enter Username"
//                     htmlFor="username"
//                     onChange={this.onChangeUser}
//                     value={user}
//                   />
//                 </div>

//                 <div className="white-box">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
//                     alt="password"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Enter Password"
//                     htmlFor="username"
//                     onChange={this.onChangePassword}
//                     value={passwords}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="add-btn"
//                   onClick={this.addPassword}
//                 >
//                   Add
//                 </button>
//               </form>
//             </div>
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
//               alt="password manager"
//               className="password-manager"
//             />
//           </div>
//           <div className="password-container">
//             <div className="count">
//               <h1>Your Passwords</h1>
//               <p className="span-cls">{detailsList.length}</p>

//               <div className="white-box1">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
//                   alt="search"
//                 />
//                 <input
//                   type="search"
//                   htmlFor="website"
//                   placeholder="search"
//                   onChange={this.onChangeSearchInput}
//                 />
//               </div>
//             </div>
//             <hr className="hr-line" />

//             <div className="ml-5">
//               <label htmlFor="show">Show passwords</label>
//               <input
//                 type="checkbox"
//                 htmlFor="show"
//                 onClick={this.showPassword}
//                 value="Showpasswords"
//               />
//             </div>
//             {lengthList > 0 ? (
//               <ul className="unordered">{this.renderPasswords()}</ul>
//             ) : (
//               <div className="no-password">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
//                   alt="no passwords"
//                   className="no-img"
//                 />
//                 <p className="no-passwods">No Passwords</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </>
//     )
//   }
// }
// export default LoginPage

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import PasswordItem from '../PasswordItem'

class LoginPage extends Component {
  state = {
    passwordRecords: [],
    inputUrl: '',
    inputName: '',
    inputPassword: '',
    searchInput: '',
    showPassword: false,
  }

  deletePasswordRecord = id => {
    const {passwordRecords} = this.state
    const filteredPasswordRecords = passwordRecords.filter(e => e.id !== id)

    this.setState({passwordRecords: filteredPasswordRecords})
  }

  getSearchRecords = () => {
    const {passwordRecords, searchInput} = this.state

    return passwordRecords.filter(eachRecord =>
      eachRecord.url.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  onInputUrlChange = e => {
    this.setState({inputUrl: e.target.value})
  }

  onSearchChange = e => {
    this.setState({searchInput: e.target.value})
  }

  onInputNameChange = e => {
    this.setState({inputName: e.target.value})
  }

  onInputPasswordChange = e => {
    this.setState({inputPassword: e.target.value})
  }

  onCheckChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  addPasswordRecord = e => {
    e.preventDefault()
    console.log('in ad ')
    const {inputUrl, inputName, inputPassword} = this.state
    const newPasswordRecord = {
      id: uuidv4(),
      url: inputUrl,
      name: inputName,
      password: inputPassword,
    }
    this.setState(prevState => ({
      passwordRecords: [...prevState.passwordRecords, newPasswordRecord],
    }))
  }

  render() {
    const {showPassword} = this.state
    const searchResults = this.getSearchRecords()
    console.log(this.state, searchResults)

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="app-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </div>
          <div className="card-container manager-container">
            <img
              src=" https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="manager-image"
            />
            <div className="card form-container">
              <form
                className="card-responsive"
                onSubmit={this.addPasswordRecord}
              >
                <h1 className="form-heading">Add New Password</h1>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                    />
                  </div>

                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.onInputUrlChange}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                    />
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.onInputNameChange}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                  </div>
                  <input
                    className="input"
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.onInputPasswordChange}
                  />
                </div>
                <div className="btn-container">
                  <button
                    className="add-btn"
                    type="submit"
                    onClick={this.addPasswordRecord}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card-container">
            <div className="card-responsive no-password-container">
              <div className="passwords-header">
                <h1 className="passwords-header-title">
                  Your Passwords
                  <p className="results-count"> {searchResults.length}</p>
                </h1>
                <div className="search-container">
                  <div className="search-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                      alt="search"
                      className="search-icon"
                    />
                  </div>
                  <input
                    className="search-input"
                    type="search"
                    placeholder="Search"
                    onChange={this.onSearchChange}
                  />
                </div>
              </div>
              <hr className="hr-line" />
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id="checkbox"
                  onChange={this.onCheckChange}
                />
                <label htmlFor="checkbox" className="checkbox-label">
                  Show Passwords
                </label>
              </div>
              {searchResults.length !== 0 ? (
                <ul className="passwords-list-container">
                  {searchResults.map(eachRecord => (
                    <PasswordItem
                      key={eachRecord.id}
                      record={eachRecord}
                      deletePasswordRecord={this.deletePasswordRecord}
                      showPassword={showPassword}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-password-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-passwords-image"
                  />
                  <p className="no-passwords-title">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
