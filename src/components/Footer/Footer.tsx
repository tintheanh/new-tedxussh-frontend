import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.scss';

interface FooterState {
	facebook: string;
	youtube: string;
	source: string;
	address: string;
}

class Footer extends Component<{}, FooterState> {
	state = {
		facebook: '',
		youtube: '',
		source: '',
		address: '',
	};

	async componentDidMount() {
		const server = process.env.SERVER;
		const res = await fetch(`${server}/footer`, { method: 'GET' });
		const data = await res.json();
		this.setState({
			facebook: data.facebook,
			youtube: data.youtube,
			source: data.source,
			address: data.address,
		});
	}

	shouldComponentUpdate(_: any, nextState: FooterState) {
		const { address, facebook, youtube, source } = this.state;
		if (
			address !== nextState.address ||
			facebook !== nextState.facebook ||
			youtube !== nextState.youtube ||
			source !== nextState.source
		) {
			return true;
		}
		return false;
	}

	render() {
		const { facebook, youtube, source, address } = this.state;
		return (
			<footer className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.smallNav}>
						<div>
							<Link href='/'>
								<a className='text'>Ban tổ chức - </a>
							</Link>
							<Link href='/'>
								<a className='text'>Thông báo sự kiện - </a>
							</Link>
							<Link href='/'>
								<a className='text'>Liên hệ</a>
							</Link>
						</div>
						<div style={{ marginTop: 22 }}>
							<a href={facebook} target='_blank' rel='noopener noreferrer'>
								<FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
							</a>
							<a href={youtube} target='_blank' rel='noopener noreferrer'>
								<FontAwesomeIcon className={styles.icon} icon={faYoutube} />
							</a>
						</div>
					</div>
					<div className={styles.center}>
						<p className={`text ${styles.text}`}>
							TEDxHCMUSSH là chương trình được cấp phép tổ chức một cách độc lập từ{' '}
							<a className={styles.ted} href={source} target='_blank' rel='noopener noreferrer'>
								TED
							</a>
							.
						</p>
					</div>
					<div className={styles.right}>
						<p className='text'>Theo dõi chi tiết chương trình</p>
					</div>
				</div>
				<div className={styles.copyright}>
					<p
						className={`text ${styles.text}`}
					>{`Copyright © ${new Date().getFullYear()} TEDxHCMUSSH - 10-12 Đinh Tiên Hoàng, Phường Bến Nghé, Quận 1, TPHCM`}</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
