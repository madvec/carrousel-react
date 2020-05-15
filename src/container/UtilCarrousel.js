import React, { Component } from 'react';
import Slide from './Slide'
import RightArrow from '../component/rightArrow'
import LeftArrow from '../component/leftArrow'
import styles from './Main.module.css'

const images = {
    image1: {
        name: 'Image Name 1',
        alt: 'Alt Name',
        src: 'https://cdn.pixabay.com/photo/2020/04/17/14/16/mountains-5055387_960_720.jpg',
        text: 'Lorem Ipsum 1'
    },
    image2: {
        name: 'Image Name 2',
        alt: 'Alt Name',
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        text: 'Lorem Ipsum 2'

    },
    image3: {
        name: 'Image Name 3',
        alt: 'Alt Name',
        src: 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg',
        text: 'Lorem Ipsum 3'
    }
}


class UtilCarrousel extends Component {

    state = {
        activeSlide: 0,
        length: Object.keys(images).length
    }

    prevImageHandler = () => {
        const prevSlide = this.state.activeSlide - 1

        if (prevSlide < 0) {
            this.setState({ activeSlide: this.state.length - 1 })
        } else {
            this.setState({ activeSlide: prevSlide })
        }

    }

    nextImageHandler = () => {
        const nextSlide = this.state.activeSlide + 1

        if (nextSlide >= this.state.length) {
            this.setState({ activeSlide: 0 })
        }
        else {
            this.setState({ activeSlide: nextSlide })
        }
    }

    render() {
        const slide = Object.keys(images)
            .map((igKey, index) => {
                return (
                    <Slide
                        key={igKey}
                        index={index}
                        active={this.state.activeSlide}
                        name={images[igKey].name}
                        alt={images[igKey].alt}
                        text={images[igKey].text}
                        src={images[igKey].src} />
                )
            })
        return (
            <div className={styles.Slider}>
                <RightArrow nextHandler={this.nextImageHandler} />
                <LeftArrow prevHandler={this.prevImageHandler} />
                <div className={styles.Util}>
                    {slide}
                </div>
            </div>
        )
    }
}

export default UtilCarrousel
