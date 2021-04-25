import React, { Component } from 'react'

export default class Gdata extends Component {
    state = {
        loding:true,
        global:[]
    }

    async componentDidMount(){
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            global:data.Global,
            loding:false
        })
        console.log(data)
    }

    render() {
        return (
            <div>
                <h2 className="text-3xl text-center font-bold">Global</h2>
                <p className="text-2xl text-center">Date: {this.state.global.Date}</p>
                <br/>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="shadow-md border-3 p-10 text-center rounded">
                        <h3 className="text-2xl text-blue-900 font-bold mb-4">Cases</h3>
                        <div className="text-2xl mb-4">
                            <span className="font-bold">New Confirmed Cases: </span>
                            {this.state.global.NewConfirmed}
                            <br/>
                            <span className="font-bold">Total Cases: </span>
                            {this.state.global.TotalConfirmed}
                        </div>
                    </div>
                    <div className="shadow-md border-3 p-10 text-center rounded">
                        <h3 className="text-2xl text-blue-900 font-bold mb-4">Recovered</h3>
                        <div className="text-2xl mb-4">
                            <span className="font-bold">New Recovered Cases: </span>
                            {this.state.global.NewRecovered}
                            <br/>
                                <span className="font-bold">Total Recovered Cases: </span>
                            {this.state.global.TotalRecovered}
                        </div>
                    </div>
                    <div className="shadow-md border-3 p-10 text-center rounded">
                        <h3 className="text-2xl text-blue-900 font-bold mb-4">Deaths</h3>
                        <div className="text-2xl mb-4">
                            <span className="font-bold">New Death Cases: </span>
                            {this.state.global.NewDeaths}
                            <br/>
                            <span className="font-bold">Total Death Cases: </span>
                            {this.state.global.TotalDeaths}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
