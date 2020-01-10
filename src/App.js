// Zadanie 1
// W zad01 masz dostępne 3 komponenty HomePage AboutPage ContactPage. Aktualnie widoczne sa wszystkie na raz.
// Wykorzystujac Routing spraw aby byly dostepne tylko pod dedykowanymi adresami URL. Sciezki pod ktorymi powinny
// byc dostepne to: /, /about, /contact
// Dodaj do projektu i wykorzystaj react-router-dom. Użyj BrowserRouter.

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import AboutPage from "./components/AboutPage/AboutPage";
// import ContactPage from "./components/ContactPage/ContactPage";
// import HomePage from "./components/HomePage/HomePage";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// Zadanie 2
// Do poprzedniego zadania stworz i dodaj komponent Menu, ktory bedzie zawieral linki prowadzace do dostepnych podstron.
// Podczas nawigacji strona nie powinna przeladowywac sie w calosci.
// Link prowadzacy do aktywnej podstrony powinien byc w jakiś sposób wyrozniony. Wykorzystaj activeStyle lub activeClassName

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import AboutPage from "./components/AboutPage/AboutPage";
// import ContactPage from "./components/ContactPage/ContactPage";
// import HomePage from "./components/HomePage/HomePage";
// import Menu from "./components/Menu/Menu";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Menu />
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// Zadanie 3
// Użyty w Zadaniu 1 BrowserRouter zastap HashRouter oraz MemoryRouter i zaobserwuj roznice.

// import React from "react";
// import { HashRouter as Router, Route } from "react-router-dom";

// import AboutPage from "./components/AboutPage/AboutPage";
// import ContactPage from "./components/ContactPage/ContactPage";
// import HomePage from "./components/HomePage/HomePage";
// import Menu from "./components/Menu/Menu";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Menu />
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { MemoryRouter as Router, Route } from "react-router-dom";

// import AboutPage from "./components/AboutPage/AboutPage";
// import ContactPage from "./components/ContactPage/ContactPage";
// import HomePage from "./components/HomePage/HomePage";
// import Menu from "./components/Menu/Menu";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Menu />
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// Zadanie 4
// Stworz komponent MoviesListPage, ktory wyswietli tylko tytuly wszystkich filmow.
// Lista powinna byc dostepna pod adresem /movies Wykorzystaj MoviesService.getMovies()
// (src/services/movies.service.js) aby pobrać dane o wszystkich filmach.
// Nie pobieraj danych bezpośrednio z pliku json.

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import AboutPage from "./components/AboutPage/AboutPage";
// import ContactPage from "./components/ContactPage/ContactPage";
// import HomePage from "./components/HomePage/HomePage";
// import Menu from "./components/Menu/Menu";
// import MoviesListPage from "./components/MoviesListPage/MoviesListPage";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Menu />
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//         <Route path="/movieList" component={MoviesListPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// Zadanie 5
// Spraw aby tytul filmu z poprzedniego zadania byl linkiem prowadzacym do widoku szczegolow wybranego filmu.
// Na potrzeby tego zadania stworz komponent MovieDetailsPage, ktory bedzie dostepny pod adresem /movie/:id.
// Do pobrania szczegolow filmu uzyj MoviesService.getMovieById(id).
// ID wybranego filmu powinno pochodzic z adresu url.

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import AboutPage from "./components/AboutPage/AboutPage";
// import ContactPage from "./components/ContactPage/ContactPage";
// import HomePage from "./components/HomePage/HomePage";
// import Menu from "./components/Menu/Menu";
// import MoviesListPage from "./components/MoviesListPage/MoviesListPage";
// import MoviesDetailsPage from "./components/MoviesDetailsPage/MoviesDetailsPage";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Menu />
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//         <Route path="/movieList" component={MoviesListPage} />
//         <Route path="/movie/:id" component={MoviesDetailsPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// Zadanie 6
// Do komponentu MovieDetailsPage dodaj przycisk, ktory cofnie uzytkownika do poprzedniego widoku.
// https://reacttraining.com/react-router/web/api/history

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import AboutPage from "./components/AboutPage/AboutPage";
// import ContactPage from "./components/ContactPage/ContactPage";
// import HomePage from "./components/HomePage/HomePage";
// import Menu from "./components/Menu/Menu";
// import MoviesListPage from "./components/MoviesListPage/MoviesListPage";
// import MoviesDetailsPage from "./components/MoviesDetailsPage/MoviesDetailsPage";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Menu />
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//         <Route path="/movieList" component={MoviesListPage} />
//         <Route path="/movie/:id" component={MoviesDetailsPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// Zadanie 7
// Zaobserwuj co sie stanie gdy przekazemy w parametrze nieistnejacy ID.
// Wykorzystaj Redirect i przekieruj uzytkownika do listy filmow.

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import AboutPage from "./components/AboutPage/AboutPage";
// import ContactPage from "./components/ContactPage/ContactPage";
// import HomePage from "./components/HomePage/HomePage";
// import Menu from "./components/Menu/Menu";
// import MoviesListPage from "./components/MoviesListPage/MoviesListPage";
// import MoviesDetailsPage from "./components/MoviesDetailsPage/MoviesDetailsPage";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Menu />
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//         <Route path="/movieList" component={MoviesListPage} />
//         <Route path="/movie/:id" component={MoviesDetailsPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// Zadanie 8
// Wykorzystujac React Refs spraw aby po wejsciu w \contact kursor byl ustawiony w polu input (focus),
// a po wcisnieciu przycisku SEND pojawił sie alert "Dziękujemy, skontaktujemy się z Toba pod adresem: podany@adres.email"

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import AboutPage from "./components/AboutPage/AboutPage";
// import ContactPage from "./components/ContactPage/ContactPage";
// import HomePage from "./components/HomePage/HomePage";
// import Menu from "./components/Menu/Menu";
// import MoviesListPage from "./components/MoviesListPage/MoviesListPage";
// import MoviesDetailsPage from "./components/MoviesDetailsPage/MoviesDetailsPage";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Menu />
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//         <Route path="/movieList" component={MoviesListPage} />
//         <Route path="/movie/:id" component={MoviesDetailsPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// Praca domowa: Obsługa błędu 404

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Menu from "./components/Menu/Menu";
import MoviesListPage from "./components/MoviesListPage/MoviesListPage";
import MoviesDetailsPage from "./components/MoviesDetailsPage/MoviesDetailsPage";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/movieList" component={MoviesListPage} />
        <Route path="/movie/:id" component={MoviesDetailsPage} />
      </div>
    </Router>
  );
}

export default App;
