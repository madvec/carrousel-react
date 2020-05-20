import React, { Component } from 'react';
import { connect } from 'react-redux'
import styles from './Main.module.css'

class ImagesList extends Component {
        
    render() {
        return (
            <div className={styles.ImagesList} >                
                <ul>
                    {Object.keys(this.props.imgs).map((key, index) => {
                        return (
                            <li key={key}><p> {this.props.imgs[key].name}</p><span onClick={() => this.props.deleteImageActionHandler(key)}>Delete</span></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        imgs: state.images
    }
}

const dispatchStateToProps = dispatch => {
    return {
        deleteImageActionHandler: (idName) => dispatch({ type: "DELETE_IMAGE", imgKey: idName })
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(ImagesList)