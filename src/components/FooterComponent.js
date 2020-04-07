import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return (
        <footer className="site-footer">
            <hr width="80%" />
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/event">Event</Link></li>
                            <li><Link to="/livingguide">Living Guidet</Link></li>
                            <li><Link to="/studentgroup">Student Group</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-4 col-sm-3 offset-1 text-center">
                    
                        <h5>Follow us on<br /> Facebook</h5>
                        <a className="btn btn-social-icon btn-facebook" href="http://wwww.facebook.com/"><i className="fa fa-facebook"></i></a>
                    </div>
                    <div className="col-4 text-center offset-1">
                        <h5>For collaboration, reach out to</h5>
                        <div className="row">
                            <div className="col-6">
                            <p>President: Lin</p>
                            </div>
                            <a className="btn btn-social-icon btn-facebook" href="http://wwww.facebook.com/"><i className="fa fa-facebook"></i></a>{' '}
                            <a role="button" className="btn btn-link" href="tel: +12065551234"><i className="fa fa-phone"></i></a><br />
                            <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> </a>
                            
                        </div>
                        <div className="row">
                        <div className="col-6">
                            <p>Vice-President: Lin</p>
                            </div>
                            <a className="btn btn-social-icon btn-facebook" href="http://wwww.facebook.com/"><i className="fa fa-facebook"></i></a>{' '}
                            <a role="button" className="btn btn-link" href="tel: +12065551234"><i className="fa fa-phone"></i></a><br />
                            <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> </a>
                        </div>
                        <div className="row">
                        <div className="col-6">
                            <p>Public Relation: Lin</p>
                        </div>
                            <a className="btn btn-social-icon btn-facebook" href="http://wwww.facebook.com/"><i className="fa fa-facebook"></i></a>{' '}
                            <a role="button" className="btn btn-link" href="tel: +12065551234"><i className="fa fa-phone"></i></a><br />
                            <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> </a>
                        </div>
                            
                        
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;