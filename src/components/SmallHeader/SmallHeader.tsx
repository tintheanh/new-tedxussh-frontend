import React from 'react';

import { ProgressiveImage } from '../../components';
import { ImageType } from '../../model';
import styles from './styles.module.scss';

interface SmallHeaderProps {
  cover_image: ImageType;
  title: string;
}

export default function SmallHeader(props: SmallHeaderProps) {
  return (
    <header className={styles.cover}>
      <ProgressiveImage
        className={styles.image}
        src={props.cover_image}
      />
      <div className={styles.wrapper}>
        <h1 className={`title ${styles.title}`}>{props.title}</h1>
      </div>
    </header>
  );
}
