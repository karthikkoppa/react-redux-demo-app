import React from "react";
import Modal from 'react-modal';
import { connect } from "react-redux";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function PopupModal(props) {
    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>{"selected rows"}</div>
                <ul>
                {props.selectedRows && props.selectedRows.map(item => {
                    return <li>{item[2].value}</li>
                })}
                </ul>
                <button onClick={props.closeModal}>close</button>
            </Modal>
        </div>
    );
}

const mapStateToProps = ({ table }) => ({
    selectedRows: table.selectedRows
});

export default connect(
    mapStateToProps,
    null
)(PopupModal);
