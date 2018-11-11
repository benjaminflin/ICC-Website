import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const MenuBurger = styled.div`
	position: fixed;
	top: 10px;
	left: 10px;
	z-index: 100;
`;

const MenuBurgerItem = styled.div`
	position: relative;
	width: 30px;
	height: 2px;
	margin: 6px;
	background: #999;
	border-radius: 100000px;
`;

const MenuItem = styled.div`
	font-family: Roboto, sans-serif;
	font-weight: 100;
	padding: 20px;
`;

class Menu extends React.Component {
	state = { open: false, drawerItems: [] };

	constructor(props) {
		super(props);
		this.toggleDrawer = this.toggleDrawer.bind(this);
		this.getDrawerItems();
	}

	async getDrawerItems() {
		const drawerItems = await fetch(`/assets/drawer-${this.props.lang}.json`).then((res) => res.json());
		this.setState({
			drawerItems
		});
	}

	toggleDrawer() {
		this.setState({ open: !this.state.open });
	}

	render() {
		return ReactDOM.createPortal(
			<React.Fragment>
				<MenuBurger onClick={this.toggleDrawer}>
					<MenuBurgerItem />
					<MenuBurgerItem />
					<MenuBurgerItem />
				</MenuBurger>
				<SwipeableDrawer open={this.state.open} onClose={this.toggleDrawer} onOpen={this.toggleDrawer}>
					{this.state.drawerItems.map((drawerItem, i) => (
						<MenuItem
							key={i}
							onClick={() => {
								this.toggleDrawer();
								this.props.setActiveSlide(drawerItem.slide);
							}}
						>
							{drawerItem.text}
						</MenuItem>
					))}
				</SwipeableDrawer>
			</React.Fragment>,
			document.getElementById('menu-root')
		);
	}
}

export default Menu;
