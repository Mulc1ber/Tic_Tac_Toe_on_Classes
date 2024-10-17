import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PLAYER } from '../../Constants';
import { checkEmpty, checkWinner } from '../../utils';
import { setIsCurrentPlayer, setFields, setIsDraw, setIsGameEnded } from '../../Actions';

export class FieldLayoutContainer extends Component {
    handleClick(index) {
        const {
            fields,
            currentPlayer,
            isGameEnded,
            setDispatchIsCurrentPlayer,
            setDispatchFields,
            setDispatchIsDraw,
            setDispatchIsGameEnded,
        } = this.props;

        if (fields[index] === '' && isGameEnded === false) {
            const newFields = fields.slice();
            newFields[index] = currentPlayer;
            setDispatchFields(newFields);

            if (checkWinner(newFields, currentPlayer)) {
                setDispatchIsGameEnded(true);
                return;
            } else if (!checkEmpty(newFields)) {
                setDispatchIsDraw(true);
                setDispatchIsGameEnded(true);
                return;
            }

            setDispatchIsCurrentPlayer(
                currentPlayer === PLAYER.crosses ? PLAYER.noughts : PLAYER.crosses,
            );
        }
    }

    render() {
        const { fields } = this.props;
        return (
            <div className="grid grid-cols-3 grid-rows-3 gap-1 mt-2 mb-3">
                {fields.map((field, index) => (
                    <div
                        key={index}
                        className="w-100 h-100 flex justify-center items-center text-5xl font-bold border border-black border-solid select-none"
                        onClick={() => this.handleClick(index)}
                    >
                        {field}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    fields: state.fields,
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
});

const mapDispatchToProps = (dispatch) => ({
    setDispatchFields: (fields) => dispatch(setFields(fields)),
    setDispatchIsGameEnded: (isGameEnded) => dispatch(setIsGameEnded(isGameEnded)),
    setDispatchIsDraw: (isDraw) => dispatch(setIsDraw(isDraw)),
    setDispatchIsCurrentPlayer: (currentPlayer) => dispatch(setIsCurrentPlayer(currentPlayer)),
});

export const FieldLayout = connect(mapStateToProps, mapDispatchToProps)(FieldLayoutContainer);
