import React, { Component } from 'react';
import Slide from './Slide'
import RightArrow from '../component/rightArrow'
import LeftArrow from '../component/leftArrow'
import Dots from '../component/dots'
import styles from './Main.module.css'

import { connect } from 'react-redux'

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
        direction: "first",
        length: 0,
        loading: true,
        disableClick: false,
        imagesToDisplay: []
    }

    componentDidMount = () => {
        
        Object.values(this.props.imgs).map((name) => {

            const imageLoader = new Image();

            imageLoader.src = name.src

            imageLoader.onload = (resp) => this.setState({ loading: false, length: Object.keys(this.props.imgs).length })

            return this.state.loading

        })

    }

    componentDidUpdate = () => {
        
    }

    disableHandler() {
        setTimeout(() => {
            this.setState({ disableClick: false })
        }, 1050)
    }

    prevImageHandler = () => {
        const prevSlide = this.state.activeSlide - 1
        const oldSlide = this.state.activeSlide
        prevSlide < 0
            ? this.setState({ activeSlide: this.props.length - 1, oldSlide: oldSlide, direction: 'prev', disableClick: true })
            : this.setState({ activeSlide: prevSlide, oldSlide: oldSlide, direction: 'prev', disableClick: true })

        this.disableHandler();

    }

    nextImageHandler = () => {
        const nextSlide = this.state.activeSlide + 1
        const oldSlide = this.state.activeSlide

        nextSlide >= this.props.length
            ? this.setState({ activeSlide: 0, oldSlide: oldSlide, direction: 'next', disableClick: true })
            : this.setState({ activeSlide: nextSlide, oldSlide: oldSlide, direction: 'next', disableClick: true })

        this.disableHandler();
    }

    dotHandler(index) {
        if (this.state.activeSlide !== index) {
            this.setState({ activeSlide: index, direction: 'next', disableClick: true })
            this.disableHandler();
        }

    }

    render() {            
        const slide = Object.keys(this.props.imgs)
            .map((igKey, index) => {
                return (
                    <Slide
                        key={igKey}
                        index={index}
                        activeSlide={this.state.activeSlide}
                        direction={this.state.direction}
                        name={this.props.imgs[igKey].name}
                        alt={this.props.imgs[igKey].alt}
                        text={this.props.imgs[igKey].text}
                        loading={this.state.loading}
                        src={this.props.imgs[igKey].src} />
                )
            })
        const dots = Object.keys(this.props.imgs)
            .map((igKey, index) => {
                return <Dots key={igKey} activeSlide={this.state.activeSlide} index={index} clicked={() => this.dotHandler(index)} />
            })
        return (
            <div className={styles.Slider}>
                <div className={styles.SliderWrapper}>
                    <RightArrow nextHandler={this.nextImageHandler} disable={this.state.loading || this.state.disableClick} />
                    <LeftArrow prevHandler={this.prevImageHandler} disable={this.state.loading || this.state.disableClick} />
                    <div className={styles.Util}>
                        {slide}
                    </div>
                    <div className="dots">
                        <ul style={{ listStyle: "none", display: "flex", justifyContent: "center", padding: "0" }}>
                            {dots}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        imgs: state.images,
        length: state.length
    }
}

const dispatchStateToProps = dispatch => {
    return {

    }
}


export default connect(mapStateToProps, dispatchStateToProps)(UtilCarrousel)
