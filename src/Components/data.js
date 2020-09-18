import React from 'react'

class Data extends React.Component {
    render() {
        return(
            <div className="Container">
                <div className="card">
                    <div className="card-header">
                        <center><h2>Data</h2></center>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-danger">
                        <h4>Kasus Covid-19</h4>
                    </div>
                    <div className="card-body">
                        <h4>Seluruh Dunia</h4>
                        <p>Total Kasus : 30.059.896 jiwa</p>
                        <p>Per 1 Juta Orang : 3.866 jiwa</p>
                        <p>Sembuh : 20.416.665 jiwa</p>
                        <p>Meninggal : 944.358 jiwa</p>
                    </div>
                    <div className="card-body">
                        <h4>Indonesia</h4>
                        <p>Total Kasus : 232.628 jiwa</p>
                        <p>Per 1 Juta Orang : 872 jiwa</p>
                        <p>Sembuh : 166.686 jiwa</p>
                        <p>Meninggal : 9.222 jiwa</p>
                    </div>
                    <div className="card-body">
                        <h4>Jawa Timur</h4>
                        <p>Total Kasus : 39.508 jiwa</p>
                        <p>Per 1 Juta Orang : 1.017 jiwa</p>
                        <p>Sembuh : 31.866 jiwa</p>
                        <p>Meninggal : 2.896 jiwa</p>
                    </div>
                    <div className="card-body">
                        <p>*dan masih banyak daerah lainnya yang belum tercantum</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-danger">
                        <h4>Peta Sebaran</h4>
                    </div>
                    <div className="card-body">
                        <p>*mencakup seluruh dunia</p>
                        <img src="./image/peta.png" height="350" width="1300" alt="peta"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data;