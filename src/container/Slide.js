import React, { Component } from 'react'
import ImageContainer from '../component/imgContainer'
import style from './Main.module.css'

class Slide extends Component {

    componentDidMount = () => {

    }

    componentDidUpdate = () => {

    }

    render() {
        let classes = [style.Carrousel__slide]
        if (this.props.active === this.props.index) {
            classes = [style.Carrousel__slide, style.Carrousel__slide__active].join(' ')
        }

        return (
            <div className={style.Slide}>
                <div className={classes}>
                    <div className={style.ImgCont}>
                        <ImageContainer text={this.props.text} src={this.props.src} />
                    </div>
                    <div className={style.TxtCont}>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slide