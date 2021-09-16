import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import background from '../../assets/images/nza_background.jpg';
import map from '../../assets/images/content-link-where.jpg';
import paper from '../../assets/images/content-navlink-news.jpg';
import phone from '../../assets/images/content-05-contact.jpg';
import staff from '../../assets/images/content-link-reputation.jpg';

const useStyles = makeStyles({
    outer_container: {
        display: 'grid',
        flexgrow: '1',
        alignContent: 'inherit',
        alignItems: 'inherit',
        width: '100%',
        height: '100%',
        fontfamily: "'Lucida Sans reg', sans-serif"
    },

    container: {
        marginLeft: '15%',
        marginRight: 'auto',
        marginTop: '7%',
        marginBottom: 'auto',
        position: 'absolute',
        alignContent: 'inherit',
        alignItems: 'inherit',
        background: 'white',
        width: '70%',
        height: '100%'
    },

    button: {
        border: 'none',
        borderradius: '5px',
        backgroundcolor: 'rgb(150, 144, 144)',
        color: 'white',
        width: '130px',
        height: '55px',
        float: 'right',
        marginRight: '5%'
    },

    logo: {
        paddingTop: '15px',
        marginLeft: '5%',
        textAlign: 'left'
    },

    sidenav: {
        width: '230px',
        height: '348px',
        marginTop: '1%',
        marginLeft: '3%',
        float: 'left',
        background: 'linear-gradient(to bottom, #AD0000 0%, #6E0000 100%)',
        overflowX: 'hidden',
        color: 'white'
    },

    sidenav_content: {
        display: 'block',
        borderTop: '1px solid white',
        marginRight: '20px'
    },

    footer_link: {
        textAlign: 'center',
        paddingRight: '50px',
        width: '90%',
        textDecoration: 'none',
        fontSize: 'medium',
        color: 'black'
    },

    footer: {
        borderTop: '1px solid black',
        borderWidth: '2px',
        width: '93%',
        textAlign: 'center',
        marginLeft: '3%',
        marginTop: '16%'
    },

    id_nav: {
        position: 'absolute',
        left: '0px',
        height: '40px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },

    id_nav_ul: {
        margin: '0',
        padding: '0'
    },

    id_nav_ul_li: {
        listStyleType: 'none',
        margin: '0',
        padding: '0px',
        float: 'left',
        height: '5%'
    },

    id_nav_ul_li_a: {
        listStyleType: 'none',
        textDecoration: 'none',
        padding: '1px 20px',
        display: 'block',
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 'medium'
    },

    line_1: {
        width: '91%',
        border: '0',
        borderTop: '10px',
        borderBottom: '2px solid black',
        marginLeft: '40px'
    },

    line_2: {
        marginLeft: '40px',
        width: '91%',
        border: '0',
        borderBottom: '2px solid black',
        paddingBottom: '20px'
    },

    side_img: {
        height: '120px',
        marginLeft: '5%',
        marginTop: '5%'
    },

    sb_text: {
        paddingTop: '10px',
        textDecoration: 'none',
        color: 'white',
        marginLeft: '5%'
    },

    body: {
        display: 'flex',
        marginRight: '50px'
    },

    contact_img: {
        width: '120%',
        marginLeft: '7%',
        marginTop: '5%',
        marginRight: '5%'
    },

    sidenav2: {
        width: '230px',
        height: '348px',
        float: 'right',
        background: 'linear-gradient(to bottom, #e0d1d1 0%, #e0d1d1 100%)',
        overflowX: 'hidden',
        color: '#AD0000',
        marginTop: '1%',
        marginBottom: '4px',
        marginLeft: '130px'
    },

    map_img: {
        width: '90%',
        height: '30%',
        marginLeft: '5%',
        marginTop: '5%'
    },

    c_sidenav_content2: {
        display: 'block',
        marginLeft: '10px'
    },
});

interface Props{
    title: string;
}
export const ContactUs = (props:Props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.outer_container}>

                <img id="img" src={background} alt="wooden border" />
                <div className={classes.container}>

                    <div>
                        <span>
                            <div>
                                <img className={classes.logo} src="http://via.placeholder.com/300x100" alt="NZA logo" />
                                <button className={classes.button}>Log In</button>
                            </div>
                        </span>

                        <div className={classes.id_nav}>
                            <ul className={classes.id_nav_ul}>
                                <li className={classes.id_nav_ul_li}><Link to='/' className={classes.id_nav_ul_li_a}>Who We Are</Link></li>
                                <li className={classes.id_nav_ul_li}><span id="vertline1">|</span></li>
                                <li className={classes.id_nav_ul_li}><Link to='/whatwedo' className={classes.id_nav_ul_li_a}>What We Do</Link></li>
                                <li className={classes.id_nav_ul_li}><span id="vertline2">|</span></li>
                                <li className={classes.id_nav_ul_li}><a className={classes.id_nav_ul_li_a} href="">News & Events</a></li>
                                <li className={classes.id_nav_ul_li}><span id="vertline3">|</span></li>
                                <li className={classes.id_nav_ul_li}><Link to='/wherewework' className={classes.id_nav_ul_li_a}>Where We Work</Link></li>
                                <li className={classes.id_nav_ul_li}><span id="vertline4">|</span></li>
                                <li className={classes.id_nav_ul_li}><Link to='/contactus' className={classes.id_nav_ul_li_a}>Contact Us</Link></li>
                            </ul>
                        </div>

                    <div className={classes.line_1}></div>
                    <div className={classes.line_2}></div>

                        <nav className={classes.sidenav}>

                            <div className={classes.sidenav_content}>
                                <div style={{ borderBottom: '1px solid white', paddingTop: '5%' }} className={classes.sb_text}>
                                    <h3>Contact Us</h3>
                                </div>
                                <div className={classes.sb_text}>
                                    <p>Directions/Parking</p>
                                </div>
                                <div className={classes.sb_text}>
                                    <p>Career Opportunities</p>
                                </div>

                                <div>
                                    <img className={classes.side_img} src={paper} alt="paper" />
                                </div>

                                <div className={classes.sb_text}>
                                    <h4>News & Events</h4>
                                </div>
                                <div className={classes.sb_text}>
                                    <p>Join our magnificent firm and do more stuff with us!</p>
                                </div>
                            </div>
                        </nav>

                        <div className={classes.body}>
                            <div>
                                <img className={classes.contact_img} src={phone} alt="contact img" />
                                <div style={{ paddingLeft: '7%', paddingTop: '5%', fontSize: '14px' }}>
                                    <p style={{ paddingBottom: '5%' }}>The office hours are 8am - 5pm, M - F</p>
                                    <p>689 East South Street</p>
                                    <p>Sutie 4210</p>
                                    <p style={{ paddingBottom: '5%' }}>Houston, TX 09324</p>
                                    <p>PH: 555-555-5555</p>
                                    <p style={{ paddingBottom: '5%' }}>FAZ: 555-555-5555</p>
                                    <p>Contact Rosemary Sage at <a style={{ color: 'blue' }} href="">rosemary@lawfirm.com</a></p>
                                </div>
                            </div>

                            <div className={classes.sidenav2}>
                                <img className={classes.map_img} src={map} alt="map" />
                                <div className={classes.c_sidenav_content2}>
                                    <h3>Where We Work</h3>
                                    <p>Find out more about our work coverage area.</p>
                                </div>
                                <img className={classes.map_img} src={staff} alt="staff pic" />
                                <p className={classes.c_sidenav_content2}>Join our magnificent firm and do more stuff with us.</p>
                            </div>

                        </div>
                    </div>

                    <div className={classes.footer}>
                        <Link to='/' className={classes.footer_link}>Who We Are</Link>
                        <Link to='/whatwedo' className={classes.footer_link}>What We Do</Link>
                        <Link to='#' className={classes.footer_link}>News & Events</Link>
                        <Link to='/wherewework' className={classes.footer_link}>Where We Work</Link>
                        <Link to='/contactus' className={classes.footer_link}>Contact Us</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}