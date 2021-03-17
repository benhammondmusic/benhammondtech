import './App.css';

function App() {
  return (
    <div className="App">
      <main className=" flex flex-col items-center justify-center h-screen">
        <h1 className="my-20 font-sans">benhammond.tech - denver developer</h1>
        <div className="w-2/3">
          <ul className="transform rotate-180 flex flex-col items-center">
            <li>
              <a href="https://docs.google.com/document/d/1nYJf1ZjGetUo8lFbwoyf23prkTw-0H_HiqvMKlY5_nw/edit?usp=sharing">resume</a>
            </li>
            <li>
              <a href="https://blog.benhammond.tech">blog</a>
            </li>

            <li>
              <a href="https://github.com/benhammondmusic">github</a>
            </li>

            <li>
              <a href="https://www.benhammondmusic.com">music</a>
            </li>

            <li>
              <a href="mailto:benjamin.hammond@gmail.com">email</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
