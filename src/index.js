import React from 'react';
import ReactDOM from 'react-dom/client';
//componente donde esta nuestro codigo
import App from './App';
//enviamos el componente al archivo public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);

export default App;
