import React, { Component } from 'react';
import Education from '../components/Education';
import AboutHome from '../components/aboutHome';
import Employment from '../components/Employment';
import Skills from '../components/Skills';
import Tools from '../components/Tools';

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: "About",
      aboutCategory: "aboutHome"
    }
  }

  changeAboutCategory = (aboutCategory) => () => {
      this.setState ({
        aboutCategory : aboutCategory
      })
   }

  render() {
    const { aboutCategory } = this.state
    return (
        <div>
          <AboutHome changeAboutCategory={this.changeAboutCategory} aboutCategory={aboutCategory} />
          <div>
            {aboutCategory === 'Education' && <Education />}
            {aboutCategory === 'Employment' && <Employment />}
            {aboutCategory === 'Skills' && <Skills />}
            {aboutCategory === 'Tools' && <Tools />}
        </div>
      </div>

    );
  }
}

export default About