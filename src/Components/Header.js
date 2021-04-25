import React from 'react'

export default function Header() {
    return (
        <div className="text-center bg-blue-500 text-white p-4 mb-10">
            <div className="text-3xl md:text-5xl font-bold mb-3"><i className="fa fa-viruses"></i> Covid-19 Tracker</div>
            <p>API by <a className="text-blue-300" href="https://covid19api.com">covid19api.com</a></p>
        </div>
    )
}
