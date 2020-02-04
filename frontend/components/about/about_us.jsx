import React from 'react';

class AboutUs extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className="about-us-container">
                <h1 className="about-us-title">Consumables is place where you can explore, and share new recipes</h1>
                <img className="classpic" src={window.classpic} alt=""/>
                <span className="about-us-divider"></span>
                <div className="our-story">
                    <h1 className ="our-story-heading">My Story</h1>
                    <p className ="our-story-description"> Consumables is a clone of Instructables. Like Instrutables, Consumables allow users to create, update, and delete instructions. 
                        My theme involved recipes for food dishes. My Love of food began early in my life, I grew up eating home cooked authentic chinese food everyday.
                        During the holidays like Chinese New Year, or the mid autumn festival, my family would gather together and cook. Each dish was unique significant, and often times symbolic. 
                        Food was used as an offering to our ancestors to pay our respects before it is shared with the family. The imagery of food and social gathering is not uncommon 
                        in other cultures. I wanted Consumables to be a reflection of how food brings people toegther. What better way than to create an app that allows people to 
                        explore and share their favorite recipes. Please check out recipes or share you own. *The picture above, is my App Academy bootcamp family, Sept, 2019 Cohort. See if you can find me!*
                    </p>
                </div>
                <div className="follow-me">
                    <h1 className="follow-me-heading">Follow Me</h1>

                    <div className="link-wrappers">
                        <a className = "follow-me-link" target="_blank" href="https://www.linkedin.com/in/kenel-zhao-961575165/">
                            <img className="linkedin-logo" src={window.linkedin} alt=""/>
                            </a>
                        <a className="follow-me-link" target="_blank" href="https://github.com/kzed-1">
                            <img className="github-logo" src={window.github} alt=""/>
                        </a>
                        <a className = "follow-me-link" target="_blank" href="https://angel.co/kenel-zhao">
                            <img className="angellist-logo" src={window.angellist} alt=""/>
                        </a>
                        <a className="follow-me-link" target="_blank" href="https://kzed-1.github.io/">
                            <img className="portfolio-logo" src={window.bag} alt=""/>
                        </a>
                    </div>
                      
                </div>
            </div>
        )
    }


}

export default AboutUs;