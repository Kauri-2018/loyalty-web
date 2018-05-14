<section className="hero is-primary is-medium">
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Logo />
        </div>
      </div>
    </nav>
  </div>

  <div className="hero-body">
    <div className="container has-text-centered">
      {this.props.isAuth
        ? this.renderProfile()
        : this.renderHome()
      }
    </div>
  </div>

  <div className="hero-foot">
    <nav className="tabs">
      <div className="container">
        <Footer />
      </div>
    </nav>
  </div>
</section>


<div className='container is-fluid'>
          <div className='container is-fluid logo'>
            <Logo />
          </div>
          {this.props.isAuth
            ? this.renderProfile()
            : this.renderHome()
          }
          <Footer />
        </div>