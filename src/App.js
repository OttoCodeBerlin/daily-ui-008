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
          Log Out
        </a>
      </nav>

      <header className="masthead text-white text-center">
        <div className="container profile-welcome mt-5">
          <h4>Profileinstellungen</h4>
          <hr className="my-4" />
          <p className="lead">Account Nr.: 0233422094</p>
          <small className="marine-text">Eintrittsdatum: 23.03.1987</small>
          <br />
        </div>
      </header>
      <section>
        <div className="jumbotron" style={{ padding: '20px', margin: '20px' }}>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Firmenname</label>
                <input
                  type="text"
                  className="form-control"
                  id="fn1"
                  placeholder="VE Werft Stralsund BT Beschaffung Prohn"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-group col-md-6">
                <label>Passwort</label>
                <input type="password" className="form-control" id="inputPassword4" />
              </div>
            </div>
            <div className="form-group">
              <label>Anschrift (1)</label>
              <input type="text" className="form-control" id="inputAddress" />
            </div>
            <div className="form-group">
              <label>Anschrift (2)</label>
              <input type="text" className="form-control" id="inputAddress2" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label>Postleitzahl</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="form-group col-md-4">
                <label>Land</label>
                <select className="form-control" id="ctrySelect">
                  <option>DDR</option>
                  <option>BRD</option>
                  <option>VR Polen</option>
                  <option>CSSR</option>
                  <option>SU</option>
                </select>
              </div>
            </div>
            <hr />
            <button type="submit" className="btn btn-outline-dark btn-sm ">
              Änderungen speichern
            </button>
          </form>
        </div>
      </section>
      <section className="showcase">
        <div className="jumbotron" style={{ padding: '20px', margin: '0px 20px 20px 20px' }}>
          <small>
            Sie können hier die Löschung Ihres Profils beantragen. Warnung! Dies kann nicht rückgängig gemacht werden!
          </small>
          <br />
          <a className="btn btn-outline btn-sm mt-2 reddish-button" href="#/edit-profile" role="button">
            Profil löschen
          </a>
        </div>
      </section>

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
