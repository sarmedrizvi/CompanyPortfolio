import React from 'react'
import './Portfolio.scss'
import { PortfolioWeb, PortfolioDesktop, PortfolioMobile } from './PortfolioArray'
let portfolioArray = [];
export const Buttonn = ({ classs, children, Onchange }) => (
    <div className='buttonn-div'>
        <button className={` ${classs} buttonn`} onClick={Onchange}>{children}</button>
    </div>
)
export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'web'
        }
    }
    render() {
        const content = this.state.content
        content === 'web' ? portfolioArray = PortfolioWeb : content === 'desktop' ? portfolioArray = PortfolioDesktop : portfolioArray = PortfolioMobile
        return (
            <div className='portfolio' id='portfolio'>
                <h1 className='portfolio-title'>Portfolio</h1>
                <div className='portfolio-buttons'>
                    <Buttonn Onchange={() => this.setState({ content: 'web' })} classs={content === 'web'?'buttonActive':''}>Web</Buttonn>
                    <Buttonn Onchange={() => this.setState({ content: 'desktop' })} classs={content === 'desktop'?'buttonActive':''}>Desktop</Buttonn>
                    {/* <Buttonn Onchange={() => this.setState({ content: 'mobile' })} classs={content === 'mobile'?'buttonActive':''}>Mobile</Buttonn> */}
                </div>

                <div className='portfolio-images'>
                    {portfolioArray.map(img => (<div className='img-hover-zoom--blur image'><img alt='portfolio' src={`${img.image}`} className='portfolio-image' data-aos='fade-up'></img><span className='sub'>{img.sub}</span></div>))}
                </div>
            </div>

        )
    }
}