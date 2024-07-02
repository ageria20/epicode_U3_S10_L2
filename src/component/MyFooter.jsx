import React from "react"

const MyFooter = () => 

    <footer className="page-footer font-small blue pt-4 mt-auto">
    <div className="container-fluid text-center text-md-left">
        <div className="row mt-auto">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">EpicBooks</h5>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a className="link-underline-opacity-0" href="#!">Home</a></li>
                    <li><a className="link-underline-opacity-0" href="#!">About</a></li>
                    <li><a className="link-underline-opacity-0" href="#!">Browse</a></li>
                    <li><a className="link-underline-opacity-0" href="#!">Contatti</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© FS0424 Epicode:
        <a href="https://mdbootstrap.com/"> Epicode.com</a>
    </div>

</footer>

export default MyFooter