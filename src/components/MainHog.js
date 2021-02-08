import React, {Component} from 'react'

class MainHog extends Component{
    render(){
        let {selectedHog, formatImage} = this.props
        return(
            <div style={{
                padding: '30px',
            }}>
                <h3>{selectedHog.name}</h3>
                <img src={formatImage(selectedHog.name)} width='50%'></img>
                <ul>
                    <li>Highest Medal Achieved: {selectedHog['highest medal achieved']}</li>
                    <li>Specialty: {selectedHog.specialty}</li>
                    <li>Weight: {selectedHog.weight}</li>
                    <li>Greased: {selectedHog.greased ? 'You betcha' : 'Negative'}</li>
                </ul>
            </div>
        )
    }
}

export default MainHog