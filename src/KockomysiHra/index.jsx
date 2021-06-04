import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css'

const KockomysiHra = () => {
  return (
  <div className="container">
    <div className="nadpis">
      <h1>Kočkomyší hra</h1>
    </div>
    <div className="obsah">
      <div className="pics">
        <img className="rules__img" id="pic1" src="../assets/map_detail.png" alt="" />
        <img className="rules__img" id="pic2" src="../assets/rebus.jpeg" alt="" />
        <img className="rules__img" id="pic3" src="../assets/watch_col.png" alt="" />
      </div>
      <div className="text">
        <h3>Vítáme Tě na stránce o naší Kočkomyší hře.</h3>
        <p>
          Naše hra je motivována současnou covidovou situací, kdy nám to všem už leze na mozek. Proto jsme se snažily pohlédnout na situaci trochu s humorem a zasadily ji do prostředí koček a myší.
        </p>
        <p>
          Hra je souborem několika rébusů (momentálně pěti), které musíš správně a rychle vyřešit, abys ve hře uspěl/a.
        </p>
        <p>
          Tato hra je vhodná obzvláště pro milovníky koček, kteří se chtějí zbavit své závislosti. Ale také pro ty, co se chtějí pobavit, odreagovat, zapřemýšlet a mít radost z toho, když správně něco vyřeší.
        </p>
        <p>
          Radost z toho, že něco správně vyřešíme, máme i my, <Link to="/jana">Jana</Link> a <Link to="/jitka">Jitka</Link>, studentky Digitální Akademie (Czechitas z.s.), proto to také děláme! Tato hra vznikla jako závěrečný projekt právě pro DA a pevně veříme, že Vás pobaví, potěší, donutí zapřemýšlet a hlavně příjemně vyplní čas.
        </p>
      </div>
    </div>
  </div>
  );
};

export default KockomysiHra;