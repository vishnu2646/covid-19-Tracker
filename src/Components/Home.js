import React, { Component } from 'react'
import Header from './Header'
import Gdata from './Gdata'
import Table from './Tabel'

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <Gdata/>
                <Table/>
            </div>
        )
    }
}
