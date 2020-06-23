import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="It's Nice To Meet You"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
                <Team />
            </div>
        );
    }
}

export default Home;