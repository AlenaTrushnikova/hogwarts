import React, {Component} from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
import MainHog from "./MainHog";

class App extends Component {
    state = {
        hogs: hogs,
        selectedHog: false
    }

    handleClickHog = (hog) => this.setState({selectedHog: hog})

    handleSort = (e) => {
        switch (e.target.value) {
            case 'greased':
                let filteredHogs = hogs.filter(hog => hog.greased == true)
                this.setState({hogs: filteredHogs})
            case 'name':
                let sortedNames = hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
                this.setState({hogs: sortedNames})
            case 'weight':
                let fatHogs = hogs.sort((a, b) => (a.weight < b.weight) ? 1 : -1)
                this.setState({hogs: fatHogs})
            default:
                this.setState({hogs: hogs})
        }
    }

    formatImage = (name) => {
        let formattedName = name.split(" ").join("_").toLowerCase()
        let pigImage = require(`../hog-imgs/${formattedName}.jpg`)
        return pigImage
    }

    render() {
        return (
            <div className="App">
                <Nav/>
                <div style={{height: '50px'}}>
                    <select onChange={this.handleSort}>
                        <option value="default">Sort Hog</option>
                        <option value="greased">Greased</option>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </div>
                {this.state.selectedHog ? <MainHog selectedHog={this.state.selectedHog}
                                                   formatImage={this.formatImage}/> : null}
                <HogsContainer hogs={this.state.hogs}
                               handleClickHog={this.handleClickHog}
                               formatImage={this.formatImage}/>
            </div>
        );
    }
}

export default App;
