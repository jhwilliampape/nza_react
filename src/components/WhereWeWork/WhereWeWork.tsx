import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import background from '../../assets/images/nza_background.jpg';
import career from '../../assets/images/content-navlink-career.jpg'


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
        height: '500px',
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
        marginLeft: '3%'
    },

    navbar: {
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

    career_text: {
        paddingTop: '10px',
        textDecoration: 'none',
        color: 'white',
        marginLeft: '5%'
    },

    location_text: {
        marginLeft: '27%',
        marginRight: '5%',
        marginTop: '10px'
    },

    states_grid: {
        marginTop: '10px',
        marginRight: '15%',
        marginBottom: '92px',
        paddingLeft: '25px',
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: '30% 30% 30% 10%',
        gridTemplateRows: 'auto',
        lineHeight: '14px'
    },

    location_headings: {
        gridArea: 'heading',
        fontWeight: 'bold',
        borderBottom: '2px solid gray',
        marginLeft: '3%',
        marginTop: '8px',
        width: '85%',
        height: '20px'
    },

    location_headings2: {
        gridArea: 'heading2',
        fontWeight: 'bold',
        borderBottom: '2px solid gray',
        marginRight: '10%',
        marginTop: '8px',
        width: '15%',
        height: '20px'
    },

    heading_container: {
        display: 'flex'
    },
});


interface Props{
    title: string;
}

export const WhereWeWork = (props:Props) => {
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


                        <div className={classes.navbar}>
                            <ul className={classes.id_nav_ul}>
                                <li className={classes.id_nav_ul_li}><Link to='/' className={classes.id_nav_ul_li_a}>Who We Are</Link></li>
                                <li className={classes.id_nav_ul_li}><span id="vertline1">|</span></li>
                                <li className={classes.id_nav_ul_li}><Link to='/whatwedo' className={classes.id_nav_ul_li_a}>What We Do</Link></li>
                                <li className={classes.id_nav_ul_li}><span id="vertline2">|</span></li>
                                <li className={classes.id_nav_ul_li}><a className={classes.id_nav_ul_li_a} href="#">News & Events</a></li>
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
                                <div style={{ borderBottom: '1px solid white', paddingTop: '5%' }} className={classes.career_text}>
                                    <h3>Where We Work</h3>
                                </div>
                                <div className={classes.career_text}>
                                    <h4>United States</h4>
                                </div>
                                <div className={classes.career_text}>
                                    <h4>International</h4>
                                </div>

                                <div>
                                    <img className={classes.side_img} src={career} alt="desk worker" />
                                </div>

                                <div className={classes.career_text}>
                                    <h4>Career Opportunities</h4>
                                </div>
                                <div className={classes.career_text}>
                                    <h4>Join our magnificent firm!</h4>
                                </div>
                            </div>
                        </nav>
                        <div className={classes.location_text}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pretium nulla, 
                                at rutrum urna consectetur sed. Cras ultricies efficitur magna, eu congue urna sodales 
                                eget. Aenean id purus quis enim scelerisque tempus id a metus. Nunc vitae luctus leo. 
                                Morbi eget malesuada purus. Nam a faucibus massa, et blandit leo. Etiam rutrum ante mi, 
                                vel mattis justo dignissim vel. Curabitur nisi magna, finibus in vehicula et, malesuada 
                                facilisis tellus. Suspendisse imperdiet non nulla sit.
                            </p>
                        </div>
                        <div className={classes.heading_container}>
                            <div className={classes.location_headings}>
                                <p>United States</p>
                            </div>
                            <div className={classes.location_headings2}>
                                <p>International</p>
                            </div>
                        </div>

                        <div className={classes.states_grid}>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p>Canada</p>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p>Columbia</p>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p>Germany</p>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p>Nicaragua</p>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p></p>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p></p>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p></p>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p></p>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p></p>
                            <p>State</p>
                            <p>State</p>
                            <p>State</p>
                            <p></p>
                            <p>State</p>
                            <p>State</p>
                            <p></p>
                            <p></p>
                            <p>State</p>
                            <p>State</p>
                            <p></p>
                            <p></p>
                            <p>State</p>
                            <p>State</p>
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