import React from 'react'
import './Team-component.scss'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// AOS.init();
let check = false;
export class TeamCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }

    }

    handlehover = () => {
        if (check) {
            check = false;
            return this.setState(prev => ({ visible: false }))

        }
        else {
            check = true;
            return this.setState(prev => ({ visible: true }))

        }
    }

    render() {

        const { imgUrl, name, work,fb,insta,github,link } = this.props;
        return (
            <div className='team-card' data-aos='fade-up' >
                <div style={{ backgroundImage: `url(${imgUrl})` }} onMouseEnter={this.handlehover} onMouseLeave={this.handlehover} alt="pro" className='team-card-image'>

                    <div className={`${this.state.visible ? 'swap' : 'unswap'} team-card-image-icons`}>
                        <span className='icon fa fa-facebook ' onClick={()=> window.open(fb)}></span>
                        <span className='icon fa fa-instagram' onClick={()=> window.open(insta)}></span>
                        <span className='icon fa fa-linkedin' onClick={()=> window.open(link)}></span>
                        <span className='icon fa fa-github' onClick={()=> window.open(github)}></span>
                    </div>
                </div>
                <h4 className='team-card-name' >{name}</h4>
                <span className='team-card-work'>{work}</span>
            </div>
        )

    }

}
