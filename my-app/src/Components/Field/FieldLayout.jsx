import { connect } from 'react-redux';
import { PLAYER } from '../../Constants';
import { checkEmpty, checkWinner } from '../../utils';
import { setIsCurrentPlayer, setFields, setIsDraw, setIsGameEnded } from '../../Actions';

export const FieldLayoutContainer = ({ dispatch, fields, currentPlayer, isGameEnded }) => {
    const handleClick = (index) => {
        if (fields[index] === '' && isGameEnded === false) {
            const newFields = fields.slice();
            newFields[index] = currentPlayer;
            dispatch(setFields(newFields));

            if (checkWinner(newFields, currentPlayer)) {
                dispatch(setIsGameEnded(true));
                return;
            } else if (!checkEmpty(newFields)) {
                dispatch(setIsDraw(true));
                dispatch(setIsGameEnded(true));
                return;
            }
            dispatch(
                setIsCurrentPlayer(
                    currentPlayer === PLAYER.crosses ? PLAYER.noughts : PLAYER.crosses,
                ),
            );
        }
    };

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-1 mt-2 mb-3">
            {fields.map((field, index) => (
                <div
                    key={index}
                    className="w-100 h-100 flex justify-center items-center text-5xl font-bold border border-black border-solid select-none"
                    onClick={() => handleClick(index)}
                >
                    {field}
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    fields: state.fields,
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
