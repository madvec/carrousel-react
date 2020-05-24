import React, {Component} from 'react';
import Slide from './Slide'
import RightArrow from '../component/rightArrow'
import LeftArrow from '../component/leftArrow'
import Dots from '../component/dots'
import Loader from '../component/UI/Loader/Loader'
import styles from './Main.module.css'
import * as actionCreators from '../store/actions/actions'

import {connect} from 'react-redux'

class UtilCarrousel extends Component {

    state = {
        activeSlide: 0,
        direction: "first",
        length: 0,
        disableClick: false,
        imagesToDisplay: []
    }

    componentDidMount() {
        this.props.fetchImages()
    }

    disableHandler() {
        setTimeout(() => {
            this.setState({disableClick: false})
        }, 1050)
    }

    prevImageHandler = () => {
        const prevSlide = this.state.activeSlide - 1
        const oldSlide = this.state.activeSlide
        prevSlide < 0
            ? this.setState({
                activeSlide: this.props.length - 1,
                oldSlide: oldSlide,
                direction: 'prev',
                disableClick: true
            })
            : this.setState({activeSlide: prevSlide, oldSlide: oldSlide, direction: 'prev', disableClick: true})

        this.disableHandler();
    }

    nextImageHandler = () => {
        const nextSlide = this.state.activeSlide + 1
        const oldSlide = this.state.activeSlide

        nextSlide >= this.props.length
            ? this.setState({activeSlide: 0, oldSlide: oldSlide, direction: 'next', disableClick: true})
            : this.setState({activeSlide: nextSlide, oldSlide: oldSlide, direction: 'next', disableClick: true})

        this.disableHandler();
    }

    dotHandler(index) {
        if (this.state.activeSlide !== index) {
            this.setState({activeSlide: index, direction: 'next', disableClick: true})
            this.disableHandler();
        }
    }

    render() {
        const {
            imgs, loading
        } = this.props
        const {
            activeSlide, direction, disableClick
        } = this.state

        if (loading) {
            return <Loader/>
        }

        const slides = Object.keys(imgs)
            .map((igKey, index) => {
                return (
                    <Slide
                        key={igKey}
                        index={index}
                        activeSlide={activeSlide}
                        direction={direction}
                        name={imgs[igKey].name}
                        alt={imgs[igKey].alt}
                        text={imgs[igKey].text}
                        loading={loading}
                        src={imgs[igKey].src}
                    />
                )
            })

        const dots = Object.keys(imgs)
            .map((igKey, index) => {
                return (
                    <Dots key={igKey}
                          activeSlide={activeSlide}
                          index={index}
                          clicked={() => this.dotHandler(index)}
                    />
                )
            })

        return (
            <div className={styles.Slider}>
                <div className={styles.SliderWrapper}>
                    <RightArrow nextHandler={this.nextImageHandler}
                                disable={loading || disableClick}/>
                    <LeftArrow prevHandler={this.prevImageHandler}
                               disable={loading || disableClick}/>
                    <div className={styles.Util}>
                        {slides}
                    </div>
                    <div className="dots">
                        <ul style={{
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "center",
                            padding: "0"
                        }}>
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
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: () => dispatch(actionCreators.fetchImages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UtilCarrousel)
