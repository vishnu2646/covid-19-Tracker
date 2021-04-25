import React from 'react'

export default function Charts() {
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <div className="number">
                                <h2>100<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">Cases</h2>
                    </div>
                </div>
                <div className="card">
                    <div clasNamclassNames="box">
                        <div className="percent">
                            <div className="number">
                                <h2>85<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">Recovered</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <div className="number">
                                <h2>60<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">Death</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
