import React from 'react'

const UserProfile = (props) => {
  const {name, photo_url, email, expiry_date, membership_number} = props.user
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          Profile
        </p>
      </header>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={photo_url} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">Membership num: {membership_number}</p>
          </div>
        </div>

        <div className="content">
          Email: {email}
          <br/>
          Expiry date: <time>{expiry_date}</time>
        </div>
      </div>
    </div>

  )
}

export default UserProfile
