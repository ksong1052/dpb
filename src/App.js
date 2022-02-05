// Portfolio: https://www.youtube.com/watch?v=nxO4kekHtMk
// Bootstrap: https://www.youtube.com/watch?v=nxO4kekHtMk

// import './App.scss';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Main from './pages/main/Main';
// import Contact from './components/contact/Contact';
// import NotFound from './pages/notFound/NotFound';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Main />} />
//         <Route exact path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/home/Home';
// import Contact from './components/contact/Contact';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;