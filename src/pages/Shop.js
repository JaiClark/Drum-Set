import React from 'react';
import { Grid } from 'react-bootstrap';
import '../components/Shop/Shop.css';
import NavBar from '../components/NavBar';
import SubTotal from '../components/SubTotal';
import EstimatedTotal from '../components/EstimatedTotal';
import ItemDetails from '../components/ItemDetails';
import '../components/ItemDetails/ItemDetails.css';

class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 100,
            estimatedTotal: 0
        }
    }
    
    
    
    
    
    render() {
        return(

        <div className="container">
           <Grid className="purchase-card">
           <SubTotal price={this.state.total.toFixed(2)} />
           <hr />
           <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />

           <ItemDetails />
           


           </Grid>
        </div>

        );
    }
}


const Shopper = () => (
    <div>
        <NavBar />
        <Checkout />
    </div> 
    
);

export default Shopper;