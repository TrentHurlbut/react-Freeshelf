import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

function BookCard({ bookTitle, author, description, image, url, publisher, pubDate, fullText }) {
  return (
    <div className="placeholder book-comp">
      <div className="placeholder book-card">
        <div className="placeholder title-author-description">
          <h1>{bookTitle}</h1>
          <h3>{author}</h3>
          <p>{description}</p>
        </div>
        <img src={image} alt={`${bookTitle} Cover`} className="cover-image" />
      </div>
      <Disclosure>
        <DisclosureButton>More Information</DisclosureButton>
        <DisclosurePanel>
          <p><strong>URL:</strong> {url}</p>
          <p><strong>Publisher:</strong> {publisher}</p>
          <p><strong>Publication Date:</strong> {pubDate}</p>
          <p><strong>Full Description:</strong><br></br>{fullText}</p>
        </DisclosurePanel>
      </Disclosure>
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