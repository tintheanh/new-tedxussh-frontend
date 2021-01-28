import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Drawer from './Drawer/Drawer';
import styles from './styles.module.scss';

interface NavBarState {
	isHighlighted: boolean;
	isDrawerOpen: boolean;
}

class NavBar extends Component<{}, NavBarState> {
	state = {
		isHighlighted: false,
		isDrawerOpen: false,
	};

	componentDidMount() {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll > 36) {
			this.setState({ isHighlighted: true });
		} else {
			this.setState({ isHighlighted: false });
		}

		window.addEventListener('scroll', this.listenToScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.listenToScroll);
	}

	listenToScroll = () => {
		const { isHighlighted } = this.state;
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll > 36 && !isHighlighted) {
			this.setState({ isHighlighted: true });
		} else if (winScroll <= 36 && isHighlighted) {
			this.setState({ isHighlighted: false });
		}
	};

	toggleDrawer = () => {
		this.setState((prevState) => ({ isDrawerOpen: !prevState.isDrawerOpen }));
	};

	render() {
		const { isHighlighted, isDrawerOpen } = this.state;
		return (
			<div className={`${styles.wrapper} ${isHighlighted ? styles.navHighlighted : styles.navNotHighlighted} `}>
				<div className={`${styles.overlay} ${isDrawerOpen ? styles.overlayShow : styles.overlayNotShow}`}></div>
				<div className={`${styles.container}`}>
					<div className={styles.logoWrapper}>
						<Link href='/' shallow>
							<img
								className={styles.logo}
								src={isHighlighted ? '/static/logo-black.png' : '/static/logo-white.png'}
								alt='logo'
							/>
						</Link>
					</div>
					<div className={styles.liContainer}>
						<div className={styles.iconWrapper} onClick={this.toggleDrawer}>
							{!isDrawerOpen ? (
								<FontAwesomeIcon className={styles.open} icon={faBars} />
							) : (
								<FontAwesomeIcon className={styles.close} icon={faTimes} />
							)}
						</div>
						<div className={styles.liWrapper}>
							<div className={styles.onlyWordsWrapper}>
								<div className={isHighlighted ? `${styles.onlyWords} ${styles.wordsHighlighted}` : styles.onlyWords}>
									<Link href='/'>
										<a className={`${styles.li} text`}>attend</a>
									</Link>
									<Link href='/'>
										<a className={`${styles.li} text`}>learn</a>
									</Link>
									<Link href='/about' shallow>
										<a className={`${styles.li} text`}>about</a>
									</Link>
									<Link href='/'>
										<a
											className={
												isHighlighted
													? `${styles.li} ${styles.eventUpdate} ${styles.eventUpdateHighlighted} text`
													: `${styles.li} ${styles.eventUpdate} text`
											}
										>
											get event update
										</a>
									</Link>
								</div>
							</div>
							<Link href='/'>
								<img className={styles.lang} src='/static/vi.png' alt='vi' />
							</Link>
							<Link href='/'>
								<img className={styles.lang} src='/static/en.png' alt='en' />
							</Link>
						</div>
					</div>
				</div>
				<Drawer isOpen={isDrawerOpen} />
			</div>
		);
	}
}

export default NavBar;
