import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Protokol from './protokol';
import Data from './data';
import Biodata from './biodata';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/protokol" component={Protokol} />
        <Route path="/data" component={Data} />
        <Route path="/biodata" component={Biodata} />
    </Switch>
)

export default Utama;