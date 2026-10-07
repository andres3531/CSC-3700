import bookImg from '../assets/book.png'
import {Link} from "react-router-dom";
function About() {
    return (
        <div>
            <h3 className='text-primary'>About Books 4 U</h3>
            <p>
                Books 4 U has been Aurora's favorite independent bookstore
                since 1987. We specialize in fiction, biography, science, and history.
            </p>
            <p>
                Visit us at 347 S. Gladstone Ave, Aurora IL.
                Open Monday through Saturday 9am to 8pm.
            </p>
            {bookImg && (
                <img src={bookImg} className='img-fluid rounded mt-3'
                     alt='Books 4 U store' />
            )}
            <div className='mt-3'>
                <Link to='/' className='btn btn-primary'>
                    Back to Books
                </Link>
            </div>
        </div>
    )
}

export default About
