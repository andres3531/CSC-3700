// src/components/BookHome.jsx
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function BookHome() {

    const title = 'My Book List'

    // useFetch handles useState, useEffect, and error handling internally
    // We just call it with the URL and destructure what we need
    const URL = 'http://localhost:3333/books'
    const { data, isPending, error } = useFetch( URL )

    // data could be null (not arrived yet) or an array (arrived)
    // Array.isArray guards against null or an unexpected object
    // If data is not an array books defaults to [] so map() never crashes
    const books = Array.isArray(data) ? data : []

    return (
        <div className='row'>

            {/* Show loading message while fetch is in progress */}
            {isPending && <div className='text-muted'>Loading ...</div>}

            {/* Show error message if fetch failed */}
            {error && <div className='text-danger'>{String(error)}</div>}

            {/* Only render the table when books have arrived */}
            {books.length > 0 && (
                <div>
                    <h3>{title}</h3>
                    <table className='table table-striped table-bordered table-hover'>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>
                                    <Link to={`/bookdetails/${book.id}`}>
                                        Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    )
}

export default BookHome
