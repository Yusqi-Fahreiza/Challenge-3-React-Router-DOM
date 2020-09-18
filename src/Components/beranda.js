import React from 'react'

class Beranda extends React.Component {
    render() {
        return(
            <div className="Container">
                <div className="card">
                    <div className="card-header">
                        <center><h2>Beranda</h2></center>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-danger">
                        <h4>Pengertian</h4>
                    </div>
                    <div className="card-body">
                        <p>
                            Penyakit virus corona (COVID-19) adalah penyakit menular yang disebabkan oleh virus corona yang baru-baru ini ditemukan. 
                            Sebagian besar orang yang tertular COVID-19 akan mengalami gejala ringan hingga sedang, dan akan pulih tanpa penanganan khusus.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-danger">
                        <h4>Cara Penularan</h4>
                    </div>
                    <div className="card-body">
                        <p>
                            Virus yang menyebabkan COVID-19 terutama ditransmisikan melalui droplet (percikan air liur) yang dihasilkan saat orang yang terinfeksi batuk, bersin, atau mengembuskan nafas. 
                            Droplet ini terlalu berat dan tidak bisa bertahan di udara, sehingga dengan cepat jatuh dan menempel pada lantai atau permukaan lainnya.
                        </p>
                        <p>
                            Anda dapat tertular saat menghirup udara yang mengandung virus jika Anda berada terlalu dekat dengan orang yang sudah terinfeksi COVID-19. 
                            Anda juga dapat tertular jika menyentuh permukaan benda yang terkontaminasi lalu menyentuh mata, hidung, atau mulut Anda.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Beranda;