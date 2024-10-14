import { useDispatch, useSelector } from 'react-redux';
import { setIsCurrentPlayer, setFields, setIsDraw, setIsGameEnded } from '../../Actions';
import { selectIsGameEnded } from '../../Selectors';

export const Restart = () => {
    const dispatch = useDispatch();
    const isGameEnded = useSelector(selectIsGameEnded);

    const handleRestart = () => {
        dispatch(setFields(Array(9).fill('')));
        dispatch(setIsCurrentPlayer('X'));
        dispatch(setIsGameEnded(false));
        dispatch(setIsDraw(false));
    };

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
