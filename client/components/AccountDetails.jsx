import React from 'react'
import {connect} from 'react-redux'

class AccountDetails extends React.Component {
  render () {
    return (
      <div className="container account-details-container">
        <section className="articles">
          <div className="column is-8 is-offset-2">
            <div className="card article">
              <div className="card-content">
                <div className="media">
                  <div className="media-center">
                    <img src={this.props.user.profilePhoto} className="author-image" alt="Placeholder image" />
                  </div>
                  <div className="media-content has-text-centered">
                    <p className="title article-title">{this.props.user.name}</p>
                    <p className="subtitle is-6 article-subtitle">
                      {this.props.user.role}
                    </p>
                  </div>
                </div>
                <div className="content article-body">
                  <p>
                    Email: {this.props.user.email}
                  </p>
                  <p>
                    Membership Number: {this.props.user.membershipNumber}
                  </p>
                  <p>
                    Expiry Date: {this.props.user.expiryDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user || {}
  }
}

export default connect(mapStateToProps)(AccountDetails)
