import React, { Component } from 'react'
import ImageContainer from '../component/imgContainer'
import Aux from '../hoc/Auxiliar'
import Loader from '../component/UI/Loader/Loader'
import style from './Main.module.css'
import './Transition.css'
import CSSTransition from 'react-transition-group/CSSTransition';


class Slide extends Component {

    render() {
        let classes = [style.Carrousel__slide]
        let imgContainer;
        let show = this.props.activeSlide === this.props.index;
        let transitionName;


        if (this.props.direction === "next") {
            transitionName = "Next"
        }
        else if (this.props.direction === "prev") {
            transitionName = "Prev"
        }
        else {
            transitionName = "First"
        }

        this.props.loading
            ? imgContainer = <Loader />
            : imgContainer = <ImageContainer text={this.props.text} src={this.props.src} />

        return (
            <Aux>
                <CSSTransition
                    in={show}
                    timeout={{ appear: 555, exit: 1000, enter: 1000 }}
                    classNames={transitionName}
                    appear
                    exit
                >
                    <div className={style.Slide}>
                        <div className={classes}>
                            <div className={style.ImgCont}>
                                {imgContainer}
                            </div>
                            {!this.props.loading ?
                                <div className="text">
                                    <p>{this.props.text}</p>
                                </div>
                                : <div></div>}
                        </div>
                    </div>
                </CSSTransition>
            </Aux>
        )
    }
}


export default Slide