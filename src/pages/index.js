import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout/index'
import Gallery from '../components/gallery/index'

import thumb16 from '../assets/images/creations/thumbs/Thumb16.jpg'
import thumb23 from '../assets/images/creations/thumbs/Thumb23.jpg'
import thumb26 from '../assets/images/creations/thumbs/Thumb26.jpg'
import thumb38 from '../assets/images/creations/thumbs/Thumb38.jpg'
import thumb42 from '../assets/images/creations/thumbs/Thumb42.jpg'
import thumb55 from '../assets/images/creations/thumbs/Thumb55.jpg'

import full16 from '../assets/images/creations/fulls/Full16.jpg'
import full23 from '../assets/images/creations/fulls/Full23.jpg'
import full26 from '../assets/images/creations/fulls/Full26.jpg'
import full38 from '../assets/images/creations/fulls/Full38.jpg'
import full42 from '../assets/images/creations/fulls/Full42.jpg'
import full55 from '../assets/images/creations/fulls/Full55.jpg'

const DEFAULT_IMAGES = [
    { id: '16', src: full16, thumbnail: thumb16, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '23', src: full23, thumbnail: thumb23, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '42', src: full42, thumbnail: thumb42, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '55', src: full55, thumbnail: thumb55, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '26', src: full26, thumbnail: thumb26, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '38', src: full38, thumbnail: thumb38, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    
];


class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }
    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Bake Batter Butter"
        const siteDescription = "Bake Custom Cake"
        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <div className="major">
                            <h1>Bake Batter Butter</h1>
                        </div>
                        <p>Bake Batter Butter custom cakes are world-famous for their beauty and quality. Every day we produce true works of “cake art” that create unforgettable memories catered specifically to your event. Our masterful cake designers can tackle virtually any request.</p>
                    </section>

                    <section id="two">
                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex