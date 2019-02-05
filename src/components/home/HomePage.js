import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render () {
        return (
            <div className="jumbotron">
                <h1>Home of everything</h1>
                <p>
                    Some text
                </p>
                <Link to="about" className="btn btn-primary btn-lg">About</Link>
            </div>
        );
    }
}

export default HomePage;