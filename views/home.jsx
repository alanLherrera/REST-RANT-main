const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div className="container">
          <img src="images/rest-rant.jpeg" alt="picture of eggs" />
        </div>
        <a href="/places">
          <button className="main-button">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
