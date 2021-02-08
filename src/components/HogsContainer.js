import React, {Component} from "react";
import HogTile from "./HogTile";

class HogsContainer extends Component {
    render(){
        return(
            <div>
                {this.props.hogs.map(hog => <HogTile hog={hog} handleClickHog={this.props.handleClickHog} formatImage={this.props.formatImage}/>)}
            </div>
        )
    }
}
export default HogsContainer