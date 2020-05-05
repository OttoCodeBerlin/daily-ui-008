import React from 'react'
import './App.css'
import icon from './images/icon_76pt@2x.png'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light static-top black">
        <a className="navbar-brand" href="https://google.com">
          <img src={icon} className="kab-icon d-inline-block align-top" alt="KAB Logo" />
        </a>
        <p className="logo-text">VEB KÜHLAUTOMAT</p>
        <a className="btn btn-outline-light btn-sm" href="/login">
          Login
        </a>
      </nav>

      <div className="jumbotron mt-5">
  <h1 className="display-4">404 Page Not Found</h1>
  <p className="lead">Die von Ihnen angeforderte Seite ist nicht verfügbar. Wir bedauern dies.</p>
  <hr className="my-4"/>
  <a class="btn btn-secondary btn-sm" href="https://kuelautomat.com" role="button">Zurück zur Homepage</a>
</div>

      <footer className="footer marine" style={{ paddingBottom: '20px' }}>
        <div className="container marine">
          <div className="row justify-content-center">
            <div className="col-lg-6 h-100 text-center my-auto">
              <ul className="list-inline mb-2 mt-4">
                <li className="list-inline-item">
                  <a href="/ueberuns" style={{ color: 'white' }}>
                    Über Uns
                  </a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="contact" style={{ color: 'white' }}>
                    Kontakt
                  </a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="tocs" style={{ color: 'white' }}>
                    Geschäftsbedingungen
                  </a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="dataprivacy" style={{ color: 'white' }}>
                    Datenschutz
                  </a>
                </li>
              </ul>
              <p className="small mb-4 mb-lg-0">
                &copy; VEB Kühlautomat Berlin, Segelfliegerdamm 34-45, Berlin 1034, DDR
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
