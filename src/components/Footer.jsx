import React from 'react'

function Footer() {
  return (
    <>
    <footer className="container py-5">
  <div className="row">
    <div className="col-12 col-md">
      <img src='/img/Logo.png' width="90" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24"></img>
      <small className="d-block mb-3 text-body-secondary">© 2023</small>
    </div>
    <div className="col-6 col-md">
  <h5>Explore</h5>
  <ul className="list-unstyled text-small">
    <li><a className="link-secondary text-decoration-none" href="/movies">Browse Movies</a></li>
    <li><a className="link-secondary text-decoration-none" href="/series">TV Shows</a></li>
    <li><a className="link-secondary text-decoration-none" href="/genres">Genres</a></li>
    <li><a className="link-secondary text-decoration-none" href="/actors">Top Actors</a></li>
  </ul>
</div>
<div className="col-6 col-md">
  <h5>Discover</h5>
  <ul className="list-unstyled text-small">
    <li><a className="link-secondary text-decoration-none" href="/coming-soon">Coming Soon</a></li>
    <li><a className="link-secondary text-decoration-none" href="/best-rated">Top Rated</a></li>
    <li><a className="link-secondary text-decoration-none" href="/trailers">Trailers</a></li>
    <li><a className="link-secondary text-decoration-none" href="/reviews">User Reviews</a></li>
  </ul>
</div>
<div className="col-6 col-md">
  <h5>About Us</h5>
  <ul className="list-unstyled text-small">
    <li><a className="link-secondary text-decoration-none" href="/about">Our Team</a></li>
    <li><a className="link-secondary text-decoration-none" href="/contact">Contact</a></li>
    <li><a className="link-secondary text-decoration-none" href="/privacy">Privacy Policy</a></li>
    <li><a className="link-secondary text-decoration-none" href="/terms">Terms of Use</a></li>
  </ul>
</div>
<div className="col-6 col-md">
  <h5>Report</h5>
  <ul className="list-unstyled text-small">
    <li><a className="link-secondary text-decoration-none" href="/about">Dead Links</a></li>
    <li><a className="link-secondary text-decoration-none" href="/contact">Database Issues</a></li>
    <li><a className="link-secondary text-decoration-none" href="/privacy">Privacy Policy</a></li>
    <li><a className="link-secondary text-decoration-none" href="/terms">Copyright</a></li>
  </ul>
  </div>
  </div>
</footer>
    </>
  )
}

export default Footer