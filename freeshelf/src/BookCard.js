import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

function BookCard({ bookTitle, author, description, image, url, publisher, pubDate, fullText }) {
  return (
    <div className="book-comp">
      <div className="book-card">
        <div className="title-author-description">
          <h1>{bookTitle}</h1>
          <h3>{author}</h3>
          <p>{description}</p>
        </div>
        <img src={image} alt={`${bookTitle} Cover`} className="cover-image" />
      </div>
      <Disclosure>
        <DisclosureButton>More Information</DisclosureButton>
        <DisclosurePanel>
          <p><strong>URL:</strong> {url ? url : "Not available."}</p>
          <p><strong>Publisher:</strong> {publisher ? publisher : "Not available."}</p>
          <p><strong>Publication Date:</strong> {pubDate ? pubDate : "Not available."}</p>
          <p><strong>Full Description:</strong><br></br>{fullText ? fullText : "Not available."}</p>
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