import React from 'react';
import {GridTile} from 'material-ui/GridList'

export default class Lot extends React.Component{

    handleClick = () => {
        this.props.getLot(this.props.lot);
    };

    render(){

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 500,
                margin: 'auto',
            },

            gridTile :{
                color: 'white',
                fontSize: '44px',
                textAlign: 'Center',
                backgroundColor: 'green'
            },
        };

        return (
            <GridTile  onClick={this.handleClick} cols={2} style={styles.gridTile}>
                <div>
                    <h2>{`${this.props.lot.num}`}</h2>
                    <p style={{fontSize: '20px'}}>{this.props.lot.address}</p>
                </div>
            </GridTile>
        );
    }
}