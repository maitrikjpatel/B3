import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout/index'
import Gallery from '../components/gallery/index'
import Images from '../assets/images/images'

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

                        <Gallery images={Images.map(({ id, src, thumbnail, caption, description }) => ({
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