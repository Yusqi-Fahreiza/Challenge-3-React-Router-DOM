import React from 'react'

class Biodata extends React.Component {
    render() {
        return(
            <div className="Container">
                <div className="card">
                    <div className="card-header">
                        <center><h2>Biodata</h2></center>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-primary">
                        <h4>Biodata Pembuat Web</h4>
                    </div>
                    <div className="card-body">
                        <p>Nama     : Yusqi Fahreiza</p>
                        <p>Absen    : 41</p>
                        <p>Kelas    : XI RPL 5</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Biodata;