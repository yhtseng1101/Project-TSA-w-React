import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class About extends Component {
    render(){
        return (
            <React.Fragment>

                <Jumbotron id="welcomeJumbotron">
                    <div className="container" >
                        <div className="row">
                            <div className="col">
                                <h2>Welcome to the </h2> 
                                <h1>Taiwanese Student Association at UT Dallas</h1>
                                <hr />
                                <p>Taiwanese Student Association at UT Dallas ("UTD TSA") is an organization formed by a group of students voluntarily devoting to provide Taiwanese students resources of networking, career path consultation, and information to get around the campus and in the Dallas area. </p>
                                <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
                            </div>						
                        </div>
                    </div>
                </Jumbotron>

                <div className="container" id="wordsFromPresident">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>Words from the President:</h4>
                                <p>Fluke barque man-of-war topmast to go on account gangplank cutlass interloper overhaul lugger. Hail-shot no prey, no pay measured fer yer chains log take a caulk American Main marooned case shot bilge rat pillage. Ballast coffer long boat yardarm rigging keelhaul pink galleon hearties mutiny. </p>

                                <p>Scallywag marooned dance the hempen jig Letter of Marque main sheet holystone strike colors crow's nest walk the plank hail-shot. Fire in the hole Pieces of Eight knave bucko landlubber or just lubber rutters bring a spring upon her cable grog yo-ho-ho gunwalls. Aft marooned Sea Legs schooner topsail draught walk the plank pirate starboard hempen halter.
                                </p>
                            </div>
                        </div>  
                    </div>
                <div className="container">   
                    <div className="row text-center">
                        <div className="col-sm-12 col-md-4 mt-4">
                            <div><i className="fa fa-calendar fa-5x" /></div>   
                            <h4 className="mt-3">Upcoming Events</h4>
                            <p>Events in sports, career, and annual gathering</p>
                            <NavLink to="/event" class="btn btn-primary">View Details >> </NavLink>
                        </div>
                        <div class="col-sm-12 col-md-4 mt-4">
                            <div><i className="fa fa-cutlery fa-5x" /></div>
                            <h4 class="CourgetteText mt-3">Living Guide</h4>
                            <p>Foods, auto mobile repair, and entertaiments</p>
                            <a href="livingguide.html" class="btn btn-primary">View Details >></a>
                        </div>
                        <div class="col-sm-12 col-md-4 mt-4">
                            <div><i className="fa fa-users fa-5x" /></div>
                            <h4 class="CourgetteText mt-3">Student Groups</h4>
                            <p>Sports & academic groups in TSA</p>
                            <a href="studentgroups.html" class="btn btn-primary">View Details >></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About;