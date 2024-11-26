import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col space-y-10 justify-center  bg-black py-10 text-white">
                <nav className="flex justify-center flex-wrap gap-6 font-medium">
                    <a className="hover:text-gray-400" href="#">Home</a>
                    <a className="hover:text-gray-400" href="#">About</a>
                    <a className="hover:text-gray-400" href="#">Services</a>
                    <a className="hover:text-gray-400" href="#">Media</a>
                    <a className="hover:text-gray-400" href="#">Gallery</a>
                    <a className="hover:text-gray-400" href="#">Contact</a>
                </nav>
                <div className="flex justify-center space-x-5">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/facebook-new.png" alt="Facebook" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/linkedin-2.png" alt="LinkedIn" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/instagram-new.png" alt="Instagram" />
                    </a>
                    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/facebook-messenger--v2.png" alt="Messenger" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/twitter.png" alt="Twitter" />
                    </a>
                </div>
                <p className="text-center text-gray-400 font-medium">&copy; 2024 Chic Ltd. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default Footer;