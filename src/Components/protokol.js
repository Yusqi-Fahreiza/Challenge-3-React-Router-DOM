import React from 'react'

class Protokol extends React.Component {
    render() {
        return(
            <div className="Container">
                <div className="card">
                    <div className="card-header">
                        <center><h2>Protokol</h2></center>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-danger">
                        <h4>Protokol Kesehatan</h4>
                    </div>
                    <div className="card-body">
                        <p>* Cuci tangan Anda secara rutin. Gunakan sabun dan air, atau cairan pembersih tangan berbahan alkohol.</p>
                        <p>* Selalu jaga jarak aman dengan orang yang batuk atau bersin.</p>
                        <p>* Kenakan masker jika pembatasan fisik tidak dimungkinkan.</p>
                        <p>* Jangan sentuh mata, hidung, atau mulut Anda.</p>
                        <p>* Saat batuk atau bersin, tutup mulut dan hidung Anda dengan lengan atau tisu.</p>
                        <p>* Jangan keluar rumah jika merasa tidak enak badan.</p>
                        <p>* Jika demam, batuk, atau kesulitan bernapas, segera cari bantuan medis.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Protokol;