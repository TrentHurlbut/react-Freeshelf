export default function FullInfo({ url, publisher, pubDate, fullText }) {

  return (
    <>
      <p><strong>URL:</strong> {url ? url : "Not available."}</p>
      <p><strong>Publisher:</strong> {publisher ? publisher : "Not available."}</p>
      <p><strong>Publication Date:</strong> {pubDate ? pubDate : "Not available."}</p>
      <p><strong>Full Description:</strong><br></br>{fullText ? fullText : "Not available."}</p>
    </>
  )
}