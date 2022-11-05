const React = require('react')
const Def = require('./places/default')

function home () {
  return (
    <def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="images/eggs.jpeg" />
        </div>
        <a href="/places">
        <button className="btn-primary">Places Page</button>
        </a>


      </main>
    </def>
  )
}

module.exports = home
