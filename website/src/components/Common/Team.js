import React, { Component } from 'react';
import TeamMember from './TeamMember';
import img1 from '../assets/img/team/1.jpg';
import img2 from '../assets/img/team/2.jpg';

const members = [
    { title: 'Sangwon JIn', subtitle: 'Web developer', image: img1 },
    { title: 'Hyeran An', subtitle: 'Graphic Designer', image: img2 },
];

class Team extends Component {
    render() {
        return (
            // < !--Team-- >
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row">
                        {members.map((member, index) => {
                            return <TeamMember {...member} key={index} />
                        })}

                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center">
                            <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
                                laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;