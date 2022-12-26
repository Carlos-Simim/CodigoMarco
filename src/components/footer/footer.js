import React from 'react';

function Footer() {
    return (
        <React.Fragment>
            <footer className="bg-primary fixed-bottom text-white text-center text-lg-start rounded border-dark bg-black">
                <div className="text-center p-4">
                    © 2022 Copyright:
                    <a className="text-white" href="https://github.com/lucaskrispim">github.com/lucaskrispim</a>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;