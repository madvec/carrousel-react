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
        oldSlide: null,
        direction: "first",
        length: Object.keys(images).length,
        loading: true,
        disableClick: false
    }

    componentDidMount = () => {

        Object.values(images).map((name) => {

            const imageLoader = new Image();
            imageLoader.src = name.src

            imageLoader.onload = (resp) => this.setState({ loading: false })

            return this.state.loading

        })

    }

    prevImageHandler = () => {
        const prevSlide = this.state.activeSlide - 1
        const oldSlide = this.state.activeSlide
        prevSlide < 0
            ? this.setState({ activeSlide: this.state.length - 1, oldSlide: oldSlide, direction: 'prev', disableClick: true })
            : this.setState({ activeSlide: prevSlide, oldSlide: oldSlide, direction: 'prev', disableClick: true })

        setTimeout(() => {
            this.setState({disableClick: false})
        }, 1050)
    }

    nextImageHandler = () => {
        const nextSlide = this.state.activeSlide + 1
        const oldSlide = this.state.activeSlide

        if (nextSlide >= this.state.length) {
            this.setState({ activeSlide: 0, oldSlide: oldSlide, direction: 'next', disableClick: true })
        }
        else {
            this.setState({ activeSlide: nextSlide, oldSlide: oldSlide, direction: 'next', disableClick: true })
        }

        setTimeout(() => {
            this.setState({disableClick: false})
        }, 1050)
    }

    render() {
        const slide = Object.keys(images)
            .map((igKey, index) => {
                return (
                    <Slide
                        key={igKey}
                        index={index}
                        activeSlide={this.state.activeSlide}
                        oldslide={this.state.oldSlide}
                        direction={this.state.direction}
                        name={images[igKey].name}
                        alt={images[igKey].alt}
                        text={images[igKey].text}
                        loading={this.state.loading}
                        src={images[igKey].src} />
                )
            })
        return (
            <div className={styles.Slider}>
                <RightArrow nextHandler={this.nextImageHandler} disable={this.state.loading || this.state.disableClick} />
                <LeftArrow prevHandler={this.prevImageHandler} disable={this.state.loading || this.state.disableClick} />
                <div className={styles.Util}>
                    {slide}
                </div>
            </div>
        )
    }
}

export default UtilCarrousel
