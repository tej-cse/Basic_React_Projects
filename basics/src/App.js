import Contact from './Contact'
import Home from './Home'
import About from './About';
import Greeting from './Greeting';
function App() {
  return (
    <div>
      <h1>Hello From ReactJS</h1>
      {/* <Home name = {'Tesuj'} age = {45} />
      <Contact />
      <About /> */}

      <Greeting name = {'Su'} />
      <Greeting name = {'Tesuj'} />
    </div>
     
  );
}

export default App;
