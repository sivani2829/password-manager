import './index.css'

// const PasswordItem = props => {
//   const {passwordDetails, showpassword, deleteItem} = props
//   const {id, websiteName, userName, password} = passwordDetails

//   const passIcon = showpassword ? (
//     <p>{password}</p>
//   ) : (
//     <img
//       src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
//       alt="stars"
//       className="star-img"
//     />
//   )

//   const onDelete = () => {
//     deleteItem(id)
//   }
//   return (
//     <>
//       <li className="list-items">
//         <h1 className="profile">{websiteName[0]}</h1>
//         <div className="details-con">
//           <p>{websiteName}</p>
//           <p>{userName}</p>
//           <div>{passIcon}</div>
//         </div>
//         <button onClick={onDelete()}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
//             alt="delete"
//             className="img-cont"
//           />
//         </button>
//       </li>
//     </>
//   )
// }
// export default PasswordItem

const PasswordItem = props => {
  const profileColors = [
    '#7683cb',
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#14b8a6',
    '#b91c1c',
    '#0ea5e9',
  ]
  const profilePicColor = profileColors[Math.floor(Math.random()) * 10 - 4]
  const {record, deletePasswordRecord, showPassword} = props
  const {id, url, name, password} = record

  const passwordPattern = showPassword ? (
    <p className="website-text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  const deleteItem = () => {
    deletePasswordRecord(id)
  }

  return (
    <li className="password-item">
      <div className="circle" style={{background: {profilePicColor}}}>
        {name.charAt(0)}
      </div>
      <div className="details-container">
        <p className="website-text">{url}</p>
        <p className="website-text">{name}</p>
        {passwordPattern}
      </div>
      <button
        type="button"
        onClick={deleteItem}
        className="delete-btn"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordItem
