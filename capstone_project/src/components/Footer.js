import '../CSS_properties/Footer.css';

function Footer() {
    return (
        <footer className="footer">
        <p>© 2023 Your Company Name. All rights reserved.</p>
        <p>
            Follow us on{' '}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
            </a>{' '}
            and{' '}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
            </a>
        </p>
        </footer>
    );
}

export default Footer;