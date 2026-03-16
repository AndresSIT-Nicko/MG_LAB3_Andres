import './App.css'
import { useState, useRef } from "react";

function App() {

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [reason, setReason] = useState("");

  const [requests, setRequests] = useState<any[]>([]);

  const submitControlled = (e: React.FormEvent) => {
    e.preventDefault();

    const newRequest = { name, id, book, author, reason };

    setRequests([...requests, newRequest]);

    setName("");
    setId("");
    setBook("");
    setAuthor("");
    setReason("");
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const bookRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const reasonRef = useRef<HTMLTextAreaElement>(null);

  const submitUncontrolled = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      name: nameRef.current?.value,
      id: idRef.current?.value,
      book: bookRef.current?.value,
      author: authorRef.current?.value,
      reason: reasonRef.current?.value
    });
  };

  return (
    <div className="container">

      <h1>Library Book Request</h1>

      <div className="form-section">
        <h2>Controlled Form</h2>

        <form onSubmit={submitControlled}>
          <input
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Student ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <input
            placeholder="Book Title"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />

          <input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <textarea
            placeholder="Reason for Request"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <button>Submit Request</button>
        </form>
      </div>

      <div className="requests">
       
        {requests.map((r, i) => (
          <div key={i} className="request-card">
            <p><b>Name:</b> {r.name}</p>
            <p><b>ID:</b> {r.id}</p>
            <p><b>Book:</b> {r.book}</p>
            <p><b>Author:</b> {r.author}</p>
            <p><b>Reason:</b> {r.reason}</p>
          </div>
        ))}
      </div>

      <div className="form-section">
        

        <form onSubmit={submitUncontrolled}>
          <input placeholder="Student Name" ref={nameRef} />
          <input placeholder="Student ID" ref={idRef} />
          <input placeholder="Book Title" ref={bookRef} />
          <input placeholder="Author" ref={authorRef} />
          <textarea placeholder="Reason for Request" ref={reasonRef}></textarea>

          <button>Submit (Console)</button>
        </form>
      </div>

    </div>
  );
}

export default App;