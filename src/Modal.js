import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
`;

class Modal extends React.Component {
	componentDidMount() {}
	render() {
		const { open, children, onClose } = this.props;
		return ReactDOM.createPortal(
			open ? <Wrapper onClick={onClose}>{children}</Wrapper> : null,
			document.getElementById('modal-root')
		);
	}
}

export default Modal;
