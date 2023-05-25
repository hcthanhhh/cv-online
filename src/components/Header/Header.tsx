export default function Header() {
    return (
        <header id="header" className="header">
            <div className="container">
                <ul className="social-icons pt-3">
                    <li className="social-item"><a className="social-link text-light" href="https://facebook.com/jordan.thanh"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
                </ul>
                <div className="header-content">
                    <h4 className="header-subtitle" >Hello, I am</h4>
                    <h1 className="header-title">Chan-Thanh Hong</h1>
                    <h6 className="header-mono" >Software Engineer</h6>
                    <a className="btn btn-primary btn-rounded" href='/files/my-cv.pdf' download='thanh-cv.pdf'><i className="ti-printer pr-2"></i>Print Resume</a>
                </div>
            </div>
        </header>
    )
}