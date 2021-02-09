import React, {Component} from "react";

class HogTile extends Component {
    state = {hide: false}

    handleHide = () => {
        this.setState({hide: true})
    }
    render() {
        const hide =  this.state.hide
        return (
            <div className={hide ? "hidden" : null}>
                <div onClick={() => this.props.handleClickHog(this.props.hog)}>
                    <h1>{this.props.hog.name}</h1>
                    <img src={this.props.formatImage(this.props.hog.name)} className='center'></img>

                </div>
                <button onClick={this.handleHide}>Hide the hog </button>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default HogTile