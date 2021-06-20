import React, { Component } from 'react';
class Sort extends Component {

    render() {
        console.log(this.props)
        return (
            <>
                <button onClick={this.props.sortA_Z}>
                    A - Z
                </button>
                <button onClick={this.props.sortZ_A}>
                    Z - A
                </button>
                <button onClick={this.props.sortAscend}>
                    Sort by Year Ascending
                </button>
                <button onClick={this.props.sortDescend}>
                    Sort by Year Descending
                </button>
                <button onClick={this.props.sortRate}>
                    Best Rate'
                </button>
            </>
        );
    }
}

export default Sort;