import React, { Component } from 'react'
// import Charts from './Charts'

export default class Tabel extends Component {
    state = {
        loding:true,
        country:[]
    }

    async componentDidMount(){
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            country:data.Countries,
            loding:false
        })
    }
    render() {
        const details = this.state.country.map((item,index) => {
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.Country}</td>
                    <td>{item.TotalConfirmed}</td>
                    <td>{item.TotalDeaths}</td>
                    <td>{item.TotalRecovered}</td>
                </tr>
            )
        })
        return (
            <div>
                {/* <Charts/> */}
                <main>
                    <div className="text-black-500 text-3xl mt-10 mb-6">
                        {this.state.loding || !this.state.country ? (<p className="text-center text-gray-800">Loading...</p>) : (
                            <div>
                                <div className="shadow overflow-hidden border-b border-gray-400 border-t border-gray-400 md:rounded-lg">
                                    <div className="table__wrapper">
                                        <table className="table">
                                            <thead> 
                                                <tr>
                                                    <td>Srno</td>
                                                    <td>Country</td>
                                                    <td>Confirmed cases</td>
                                                    <td>Recovered Cases</td>
                                                    <td>Death</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {details}
                                            </tbody>
                                        </table>       
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        )
    }
}
