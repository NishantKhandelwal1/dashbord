import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default">
            
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Brand</a>
                </div>

                {/* Collect the nav links, forms, and other content for toggling  */}
                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                        
                    </ul>
                    <ul className="collapse nav navbar-nav nav-collapse" id="nav-collapse1">
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Graphic design</a></li>
                        <li><a href="#">Print</a></li>
                        <li><a href="#">Motion</a></li>
                        <li><a href="#">Mobile apps</a></li>
                    </ul>
                </div>
           
        </nav>
    );
}

export default Navbar;
