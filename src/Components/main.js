import React from 'react';

import { getBlog , deleteBlog } from '../Apis/callApis';
import Grid from '@material-ui/core/Grid'
import CardMedias from '../Elements/cards';
import Button from '@material-ui/core/Button';
//import { Cardlist } from '../Elements/Cardlist';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogData:[],
            page:1,
            limit:10
        }
        
    }

    componentDidMount() {
        getBlog(this.state.page,this.state.limit).then((data)=>{
            this.setState({blogData:data});
        }).catch((err) => {
            console.log(err);
        })
    }

    deleteRecord = (id) => {
        if(id) {
            deleteBlog(id).then((res)=>{
                let IndexAr = this.state.blogData.findIndex(x => x.id === id)
                let newArr = this.state.blogData;
                // newArr[IndexAr].status = this.state.blogData[IndexAr].status === 'c' ? 'r' : 'c';
                newArr.splice(IndexAr,1);
                this.setState({blogData:newArr});                
            }).catch((err)=>{
                console.log(err);
            })
        }
    }

    goToNextPage = () => {
        
        let curruntPage = this.state.page;
        
        let upcommingpage = curruntPage + 1;
        
        getBlog(upcommingpage,this.state.limit).then((data)=>{
            this.setState({blogData:data,page:upcommingpage});
        }).catch((err) => {
            console.log(err);
        })   
    }

    goToPrevPage = () => {
        let curruntPage = this.state.page;
        if(curruntPage > 1) {
            let upcommingpage = curruntPage - 1;
            getBlog(upcommingpage,this.state.limit).then((data)=>{
                this.setState({blogData:data,page:upcommingpage});
            }).catch((err) => {
                console.log(err);
            })
        }           
    }

    render() {
        
        return (
            <>
                <h1>Blogs From Api</h1>
                <h3>Currunt Page {this.state.page}</h3>
                <Grid container  justify="space-between" spacing={24}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        {this.state.page > 1 ? <Button variant="outlined" color="primary" style={{margin:10}} onClick={this.goToPrevPage} >
                            Prev
                        </Button> : ''}
                        <Button variant="outlined" color="primary" style={{margin:10}} onClick={this.goToNextPage}>
                            Next
                        </Button>

                    </Grid>
                    <Grid item xs={4}></Grid>
                    
                </Grid>
                <Grid container  justify="space-between" spacing={24}>
                    
                    {this.state.blogData.map((datas) => {
                        return <Grid item xs={4}>  <CardMedias myid={datas.id} title={datas.title} desc={datas.body} btnEvent={this.deleteRecord} /> </Grid>;
                    })}
                        
                    
                </Grid>
            </>
        );
    }

}


export default Main;