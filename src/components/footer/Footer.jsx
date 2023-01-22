import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Ariq Naufal Fadhlurrahman</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://instagram.com/riqnopal?igshid=NTA5ZTk1NTc=" className="home_social-icon" target="__blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ariq-naufal-fadhlurrahman-5a0b81260" className="home_social-icon" target="__blank">
                        <i class="uil uil-linkedin"></i>
                    </a>
                </div>

                <span className="footer_copy">Made With &#128151; - Ariq Naufal Fadhlurrahman </span>
            </div>
        </footer>
    )
}

export default Footer