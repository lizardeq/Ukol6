import React from 'react';

const Jitka = () => {
  return (
    <div className="container">
    <div className="nadpis">
      <h1>Stránka o Jitce</h1>
    </div>
    <div className="obsah">
      <div className="pics">
        <img className="rules__img" id="pic1" src="../assets/map_detail.png" alt="" />
        <img className="rules__img" id="pic2" src="../assets/rebus.jpeg" alt="" />
        <img className="rules__img" id="pic3" src="../assets/watch_col.png" alt="" />
      </div>
      <div className="text">
        <h3>Vedoucí technického oddělení</h3>
        <p>
          Odstavec 1
        </p>
        <p>
          Odstavec 2
        </p>
        <p>
          Odstavec 3
        </p>
        <p>
          Odstavec 4
        </p>
      </div>
    </div>
  </div>
  );
};

export default Jitka;