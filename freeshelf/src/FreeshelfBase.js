import BookCard from './BookCard';
import library from './BookData';

function FreeshelfBase() {
  let books = [];

  for (let i = 0; i < library.length; i++){
    books.push(<BookCard
      bookTitle={library[i]["title"]}
      author={library[i]["author"]}
      description={library[i]["shortDescription"]}
      image={library[i]["coverImageUrl"]}
      url={library[i]["url"]}
      publisher={library[i]["publisher"]}
      pubDate={library[i]["publicationDate"]}
      fullText={library[i]["detailedDescription"]}
      key={i}
    />)
  }

  return (
    <div className="Base">
      {books}
    </div>
  )
}

export default FreeshelfBase;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;