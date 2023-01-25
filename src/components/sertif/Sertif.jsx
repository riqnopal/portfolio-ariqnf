import React from 'react'
import './sertif.css'

const Sertif = () => {
    return (
        <section className="sertif section">
            <h2 className="section_title">
                Certificate
            </h2>
            <span className="section_subtitle">
                My Certificate
            </span>

            <div className="serfit_container container grid">
                <div className="sertif_content">
                    <div>
                        <i className="uil uil-arrow sertif_icon"></i>
                        <h3 className="sertif_title"> CSS </h3>
                        <h4 className="sertif_company"> SoloLearn </h4>
                    </div>

                    <a href="https://api2.sololearn.com/v2/certificates/CT-QERYQQAR/image/png" target="__blank" className="serfit_button">
                        View Certificate <i className="bx bx-right-arrow-alt sertif_button-icon"></i>
                    </a>
                </div>

                <div className="sertif_content">
                    <div>
                        <i className="uil uil-web-grid-alt sertif_icon"></i>
                        <h3 className="sertif_title"> Pyhton<br /> (Intermediate)</h3>
                        <h4 className="sertif_company"> SoloLearn</h4>
                    </div>

                    <a href="https://api2.sololearn.com/v2/certificates/CC-KH2HWHUY/image/png" target="__blank" className="serfit_button">
                        View Certificate <i className="bx bx-right-arrow-alt sertif_button-icon"></i>
                    </a>
                </div>

                <div className="sertif_content">
                    <div>
                        <i className="uil uil-web-grid-alt sertif_icon"></i>
                        <h3 className="sertif_title"> Cloud Computing<br /> (Fundamental)</h3>
                        <h4 className="sertif_company"> Programming Hub </h4>
                    </div>

                    <a href="https://storage.googleapis.com/programminghub/certificate%2F1673456128691.jpg" target="__blank" className="serfit_button">
                        View Certificate <i className="bx bx-right-arrow-alt sertif_button-icon"></i>
                    </a>
                </div>
           

             <div className="sertif_content">
                    <div>
                        <i className="uil uil-web-grid-alt sertif_icon"></i>
                        <h3 className="sertif_title"> AWS Cloud Computing<br /> (Fundamental)</h3>
                        <h4 className="sertif_company"> Programming Hub </h4>
                    </div>

                    <a href="https://storage.googleapis.com/programminghub/certificate%2F1673460229280.jpg" target="__blank" className="serfit_button">
                        View Certificate <i className="bx bx-right-arrow-alt sertif_button-icon"></i>
                    </a>
                </div>
            

            <div className="sertif_content">
                <div>
                    <i className="uil uil-web-grid-alt sertif_icon"></i>
                    <h3 className="sertif_title"> Foundation Poster <br /> (3rd)</h3>
                    <h4 className="sertif_company"> INSTITUTE IAIGHURABAA </h4>
                </div>

                <a href="https://badgr.com/public/assertions/flT_rDaDQtmV8zJrKSeGxA?identity__email=daninur84@gmail.com" target="__blank" className="serfit_button">
                    View Certificate <i className="bx bx-right-arrow-alt sertif_button-icon"></i>
                </a>
            </div>
        </div>
       

        </section>
    )
}

export default Sertif