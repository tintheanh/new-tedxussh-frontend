import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

interface DrawerProps {
	isOpen: boolean;
}

export default function Drawer(props: DrawerProps) {
	return (
		<div className={props.isOpen ? `${styles.container} ${styles.open}` : styles.container}>
			<div className={styles.wrapper}>
				<Link href='/'>
					<a className={`${styles.li} text`}>attend</a>
				</Link>
				<Link href='/'>
					<a className={`${styles.li} text`}>learn</a>
				</Link>
				<Link href='/about'>
					<a className={`${styles.li} text`}>about</a>
				</Link>
				<Link href='/'>
					<a className={`${styles.li} ${styles.eventUpdate} text`}>get event update</a>
				</Link>
				<Link href='/'>
					<img className={styles.lang} src='/static/vi.png' alt='vi' />
				</Link>
				<Link href='/'>
					<img className={styles.lang} src='/static/en.png' alt='en' />
				</Link>
			</div>
		</div>
	);
}
