import React from 'react';

import { getProduct } from '../Apis/callApis';
import Grid from '@material-ui/core/Grid'
import CardMedias from '../Elements/cards';
import Table from '../Elements/table';
//import { Cardlist } from '../Elements/Cardlist';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prodData:[],
            comparedRecord:[]
        }
        
    }

    componentDidMount() {
        getProduct().then((data)=>{
            let newData = data;
            newData = newData.map((i) => ({...i,'status':'c'}));
            this.setState({prodData:newData});
        }).catch((err) => {
            console.log(err);
        })
    }

    compareMyRecord = (id) => {
        if(id) {
            let IndexAr = this.state.prodData.findIndex(x => x.id === id)
            let newArr = this.state.prodData;
            newArr[IndexAr].status = this.state.prodData[IndexAr].status === 'c' ? 'r' : 'c';
            this.setState({prodData:newArr,comparedRecord:[...this.state.comparedRecord,newArr[IndexAr]]});
        }
    }

    render() {
        console.log(this.state);
        return (
            <>
                <h1>Random Product Page</h1>
                <Grid container>
                    <Grid item xs={6}> 
                    {this.state.prodData.map((datas) => {
                        return <CardMedias myid={datas.id} title={datas.title} image={datas.url} status={datas.status} btnEvent={this.compareMyRecord} />
                    })}
                        
                    </Grid>
                    <Grid item xs={6}>
                        <h2>Table</h2>
                        <Table data={this.state.comparedRecord} />
                    </Grid>
                </Grid>
            </>
        );
    }

}


export default Main;