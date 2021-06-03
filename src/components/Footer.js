import React from 'react';

const Footer = () => {

    return (
        <div>
              <div className="ui divider"></div>
            <div className="ui inverted vertical footer segment">
                <div className="ui container">
                    <div>
                        <div className="ui stackable inverted divided equal height stackable grid">

                            <div className="three wide column">
                                <h4 className="ui inverted header">Roommates</h4>
                                <div className="ui inverted link list">
                                    <a href="#" className="item">Link 1</a>
                                    <a href="#" className="item">Link 1</a>
                                    <a href="#" className="item">Link 1</a>
                                </div>
                            </div>

                            <div className="three wide column">
                                <h4 className="ui inverted header">Hosting</h4>
                                <div className="ui inverted link list">
                                    <a href="#" className="item">Link 1</a>
                                    <a href="#" className="item">Link 1</a>
                                    <a href="#" className="item">Link 1</a>
                                </div>
                            </div>

                            <div className="seven wide column">
                                <h4 className="ui inverted header">Policies</h4>
                                <div className="ui inverted link list">
                                    <p>
                                        By using the Share-Space Platform as a Host or Guest, 
                                        you are indicating that you have read and that you understand 
                                        and agree to be bound by this Guest Refund Policy.
                                    </p>
                                </div>
                              

                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
};

export default Footer;