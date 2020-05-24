import React, { Component } from 'react';
import Slide from './Slide'
import RightArrow from '../component/rightArrow'
import LeftArrow from '../component/leftArrow'
import Dots from '../component/dots'
import Loader from '../component/UI/Loader/Loader'
import styles from './Main.module.css'
import * as actionCreators from '../store/actions/actions'

import { connect } from 'react-redux'

class UtilCarrousel extends Component {

    state = {
        activeSlide: 0,
        direction: "first",
        length: 0,
        disableClick: false,
        imagesToDisplay: []
    }

    componentDidMount = () => {

        this.props.setImages()

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
        let slide = <Loader />

        if (!this.props.loading) {
            slide = Object.keys(this.props.imgs)
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
                            loading={this.props.loading}
                            src={this.props.imgs[igKey].src} />
                    )
                })
        }


        const dots = Object.keys(this.props.imgs)
            .map((igKey, index) => {
                return <Dots key={igKey} activeSlide={this.state.activeSlide} index={index} clicked={() => this.dotHandler(index)} />
            })
        return (
            <div className={styles.Slider}>
                <div className={styles.SliderWrapper}>
                    <RightArrow nextHandler={this.nextImageHandler} disable={this.props.loading || this.state.disableClick} />
                    <LeftArrow prevHandler={this.prevImageHandler} disable={this.props.loading || this.state.disableClick} />
                    <div className={styles.Util}>
                        {slide}
                    </div>
                    <div className="dots">
                        <ul style={{
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "center",
                            padding: "0"}}>
                            {dots}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        imgs: state.images,
        length: state.length,
        loading: state.loading
    }
}

const dispatchStateToProps = dispatch => {
    return {
        setImages: () => dispatch(actionCreators.set_images())
    }
}


export default connect(mapStateToProps, dispatchStateToProps)(UtilCarrousel)
