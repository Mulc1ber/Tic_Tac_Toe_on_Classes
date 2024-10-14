import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectIsGameEnded, selectIsDraw } from '../../Selectors';

export const InformationLayout = () => {
    const currentPlayer = useSelector(selectCurrentPlayer);
    const isGameEnded = useSelector(selectIsGameEnded);
    const isDraw = useSelector(selectIsDraw);

    const displayingInformation = () => {
        if (isDraw) {
            return 'Ничья';
        } else if (!isDraw && isGameEnded) {
            return `Победа: "${currentPlayer}"`;
        } else {
            return `Ходит: "${currentPlayer}"`;
        }
    };

    return <div className="text-3xl text-center font-bold">{displayingInformation()}</div>;
};
