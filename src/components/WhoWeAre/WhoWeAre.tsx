import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import background from '../../assets/images/nza_background.jpg';
import forest from '../../assets/images/nza_slideshow.jpg';


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
        float: 'right',
        background: 'linear-gradient(to bottom, #AD0000 0%, #6E0000 100%)',
        overflowX: 'hidden',
        color: 'white'
    },

    h5: {
        padding: '0px 0px 0px 20px',
        marginBottom: '1px',
        fontSize: '12px',
        color: '#eee',
        textAlign: 'center'
    },

    forest_img: {
        marginTop: '10px',
        paddingLeft: '70px',
        width: '65%'
    },

    main: {
        verticalAlign: 'top',
        paddingBottom: '10px'
    },

    main_header: {
        paddingTop: '10px',
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: '70px',
        fontSize: '12px'
    },

    main_text: {
        color: 'black',
        fontSize: '12px',
        lineHeight: '1.5',
        paddingLeft: '70px',
        paddingRight: '30px',
        width: '65%'
    },

    contact_header: {
        fontWeight: 'bold',
        color: 'black',
        width: '160px',
        fontSize: '14px',
        paddingTop: '40px'
    },

    contact_text: {
        color: 'black',
        width: '160px',
        fontSize: '14px'
    },

    contact_info: {
        right: '40px',
        top: '450px',
        position: 'absolute'
    },

    sb_text: {
        color: 'white',
        marginLeft: '5px',
        fontSize: '12px',
        paddingLeft: '5%',
        paddingRight: '5%'
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
        float: 'left'
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
});


interface Props {
    title: string;
}

export const WhoWeAre = ( props:Props) => {
    const classes = useStyles();
    return (
        <body>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>
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

                        {/*Navbar*/}
                        <div className={classes.navbar}>
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


                        <div className={classes.main}>
                        <img className={classes.forest_img} src={forest} alt="forest img" />

                            <nav className={classes.sidenav}>
                                <h3 style={{ paddingLeft: '5%', paddingTop: '5%' }}>Newsfeed</h3>
                                    <div>
                                        <h5 className={classes.h5}>Category</h5>
                                        <div>
                                            <a style={{ paddingLeft: '5%', color: 'white' }} href="#">Link</a>
                                        </div>
                                        <p className={classes.sb_text} style={{ paddingLeft: '3%' }}>Nostrum website salvete! Hoc septimana 
                                            I ad sectionem welcom volutpat vestibulum project 
                                            coding in templo. Hic est, qui sumus in thext pagina. Et hoc est exemplum in textu.
                                        </p>
                                        <h5 className={classes.h5}>Footnotes</h5>
                                        <a style={{ paddingLeft: '5%', color: 'white'}} href="#">Linkable Subtext</a>
                                    </div>
                            </nav>

                            <div>
                                <h5 className={classes.main_header}>Welcome to our website!</h5>
                                <p className={classes.main_text} id="who_we_are_text">Nostrum website salvete! Hoc septimana I ad sectionem welcom volutpat vestibulum project 
                                coding in templo. Hic est, qui sumus in thext pagina. Et hoc est exemplum in textu. Nostrum website salvete! Hoc septimana I ad sectionem welcom volutpat vestibulum project 
                                coding in templo. Hic est, qui sumus in thext pagina. Et hoc est exemplum in textu.
                                </p>
                            </div>

                            <div className={classes.contact_info}>
                                <h5 className={classes.contact_header}>Bigshot, Zoo, & Adds, P.C.</h5>
                                <p className={classes.contact_text}>419 West South Street, Suite 4200
                                    <br/> Houston, Texas 35983
                                    <br/> 555-555-5555 (Phone)
                                    <br/> 555-555-5555 (Fax)
                                </p>
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

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.4/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/js/bootstrap.min.js"></script>

        </body>
    )
}