import React, { Component } from 'react';
import { connect } from 'react-redux';

export class InformationLayoutContainer extends Component {
    render() {
        const { currentPlayer, isGameEnded, isDraw } = this.props;
        return (
            <div className="text-3xl text-center font-bold">
                {isDraw
                    ? 'Ничья'
                    : isGameEnded
                      ? `Победа: "${currentPlayer}"`
                      : `Ходит: "${currentPlayer}"`}
            </div>
            // <div className="text-3xl text-center font-bold">{this.displayingInformation()}</div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw,
});

export const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer);
