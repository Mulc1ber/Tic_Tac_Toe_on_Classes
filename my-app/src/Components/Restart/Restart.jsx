import { connect } from 'react-redux';
import { setIsCurrentPlayer, setFields, setIsDraw, setIsGameEnded } from '../../Actions';

export const RestartContainer = ({ handleRestart, isGameEnded }) => {
    return (
        <button
            className="px-4 py-2 rounded-lg border-0 bg-black text-white text-base disabled:opacity-50"
            disabled={!isGameEnded}
            onClick={handleRestart}
        >
            Начать заново
        </button>
    );
};

const mapStateToProps = (state) => ({
    isGameEnded: state.isGameEnded,
});

const mapDispatchToProps = (dispatch) => ({
    handleRestart: () => {
        dispatch(setFields(Array(9).fill('')));
        dispatch(setIsCurrentPlayer('X'));
        dispatch(setIsGameEnded(false));
        dispatch(setIsDraw(false));
    },
});

export const Restart = connect(mapStateToProps, mapDispatchToProps)(RestartContainer);
