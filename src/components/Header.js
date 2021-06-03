import React from 'react';

const Header = () => {
    return (
    <div>

        <div className="ui top fixed menu">
                <div className="item">
                    <img src="/images/logo.png" />
                </div>
                <a className="item">Features</a>
                <a className="item">Testimonials</a>
                <a className="item">Sign-in</a>
        </div>
    </div>
    );
    

};

export default Header;