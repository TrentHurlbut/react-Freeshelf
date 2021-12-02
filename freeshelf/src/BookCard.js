
function BookCard({ bookTitle, author, description, image }) {
  return (
    <div className="placeholder book-card">
      <div className="placeholder title-author-description">
        <h1>{bookTitle}</h1>
        <h3>{author}</h3>
        <p>{description}</p>
      </div>
      <img src={image} alt={`${bookTitle} Cover`} className="cover-image" />
    </div>
  )
}

export default BookCard;


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