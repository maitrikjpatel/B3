import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout/index'
// import Lightbox from 'react-images'
import Gallery from '../components/gallery/index'

import thumb01 from '../assets/images/thumbs/1.jpg'
import thumb02 from '../assets/images/thumbs/2.jpg'
import thumb03 from '../assets/images/thumbs/3.jpg'
import thumb04 from '../assets/images/thumbs/4.jpg'
import thumb05 from '../assets/images/thumbs/5.jpg'
import thumb06 from '../assets/images/thumbs/6.jpg'
import thumb07 from '../assets/images/thumbs/7.jpg'
import thumb08 from '../assets/images/thumbs/8.jpg'

import full01 from '../assets/images/fulls/1.jpg'
import full02 from '../assets/images/fulls/2.jpg'
import full03 from '../assets/images/fulls/3.jpg'
import full04 from '../assets/images/fulls/4.jpg'
import full05 from '../assets/images/fulls/5.jpg'
import full06 from '../assets/images/fulls/6.jpg'
import full07 from '../assets/images/fulls/7.jpg'
import full08 from '../assets/images/fulls/8.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '7', src: full07, thumbnail: thumb07, caption: 'Photo 7', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '8', src: full08, thumbnail: thumb08, caption: 'Photo 8', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
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
                        <h2>Recent Work</h2>

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