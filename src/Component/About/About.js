import React from 'react'
import './About.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
export const About = () => (

    <div className='about' id='about'>
        <h1 data-aos='fade-up' className='about-title'>About Softlamp</h1>
        <div data-aos='fade-up' className='about-objects'>
            <div data-aos='fade-up' className='objects-image' />
            <div className='objects-writing'>
                <h3 className='objects-title'>What is SoftLamp?</h3>
                <span className='objects-para'> We provide complete business solutions, which enables businesses to leverage leading edge technology to gain sustainable competitive advantages in today’s marketplace. We are known for our talent, passion, work ethic and building ongoing long term relationships and commitment through support and maintenance. Currently, the Development Centre of SOFTLAMP is located close to FB Area, Karachi, Pakistan. A good team is significant to the success of any business. SOFTLAMP takes pride in having a trustworthy and sturdy team of more than 6 members. Since our founding, we have worked with the best in the industry. We pride ourselves on the skills and professionalism of our team members and invest time and effort in training them to further enhance their skills. During recruitment, we take utmost care to select the most deserving candidates having high cultural values along with a calm mind-set. Our Team Managers are available round the clock for any kind of communication and information transmission so that work is not hampered in any way. Team Managers can be contacted through email, phone and any Instant Messenger convenient to the client such as MSN, Yahoo, AIM, Google Talk, Skype and ICQ. At SOFTLAMP, we value your time as much as our own. Our turn-around time is the most minimal and we assure reply within 1 business day.</span>
            </div>
            <div className='objects-writing'>
                <h3 className='objects-title'>What we do</h3>
                <span className='objects-para'>The company stands ahead for its brilliant work in the
field of Website, Mobile apps, Software, Graphics, and
Online marketing. We specialize in advertising and
marketing of business entities. We help clients to plan and
create strategies that will enhance their competitiveness
and produce measurable results.
Our process has been designed and proven to produce
the greatest results in the shortest amount of time. Our
tools are our minds and we are committed to delivering
the highest quality work, support and maintenance at the
most competitive pricing.

                </span>
            </div>
            <div className='objects-writing'>
                <h3 className='objects-title'>Our Mission</h3>
                <span className='objects-para'>
                    Our primary mandate is to ensure customer satisfaction.
    We serve our clients as a trusted ally, providing them with
    the loyalty of a true business partner. We believe in treat
    our employees as family, as they are our strength. We are
    committed towards mutually shared values and believe
    in achieving the highest levels of customer satisfaction,
    with extraordinary emphasis on the creation of value.
    Since our founding, we have worked with the best in the
    industry. We pride ourselves on the skills and
    professionalism of our team members and invest time
    and effort in training them to further enhance their skills.
                </span>
            </div>
        </div>
    </div>
)