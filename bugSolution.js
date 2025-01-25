```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  let location = useLocation();
  console.log('location: ', location);
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
      <p>Current Location: {location.pathname}</p>
    </div>
  );
}

function About() {
  let location = useLocation();
  console.log('location: ', location);
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link> 
      <p>Current Location: {location.pathname}</p>
    </div>
  );
}
export default App;
```