// src/components/BookDetails.jsx
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function BookDetails() {

    // Get the id from the current URL — e.g. /bookdetails/3 gives id = '3'
    const { id } = useParams()

    // Build the URL using the id — useFetch re-runs whenever id changes
    const url = `http://localhost:3333/books/${id}`

    // useFetch fetches the single book at this URL
    const { data, error, isPending } = useFetch(url)

    // JSON Server returns a single object for /books/:id not an array
    // data && !Array.isArray(data) confirms it is a non-null non-array object
    // If data has not arrived yet or is wrong shape book is null
    const book = data && !Array.isArray(data) ? data : null

    return (
        <div>
            <h2>Book Details {id}</h2>
            <p className='text-muted'>The book you seek has id = {id}</p>

            {/* Loading and error states */}
            {isPending && <div className='text-muted'>Loading ...</div>}
            {error && <div className='text-danger'>{error}</div>}

            {/* Only render the table when book has arrived */}
            {book && (
                <table className='table table-striped table-bordered text-center'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.desc}</td>
                    </tr>
                    </tbody>
                </table>
            )}

            <Link to='/' className='btn btn-secondary mt-3'>
                Back to All Books
            </Link>
        </div>
    )
}

export default BookDetails
