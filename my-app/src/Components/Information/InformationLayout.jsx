import { connect } from 'react-redux';

export const InformationLayoutContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
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

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw,
});

export const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer);
