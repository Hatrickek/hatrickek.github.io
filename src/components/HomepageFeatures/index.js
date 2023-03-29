import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ProjectList = [
  {
    title: 'My Projects',
    Svg: require('@site/static/img/OXLogo.svg').default,
    description: (
      <a href="https://github.com/Hatrickek">
        Projects I have worked on.
      </a>
    ),
  },
  {
    title: 'About me',
    Svg: require('@site/static/img/OXLogo.svg').default,
    description: (
      <p>
        20 yo graphics and systems programmer.
        <p>
          C++ and Rust enjoyer.
        </p>
      </p>
    ),
  },
  {
    title: 'Contact',
    Svg: require('@site/static/img/OXLogo.svg').default,
    description: (
      <div>
        <p>E-Mail:
          <a href="mailto:hatrickek@outlook.com" > hatrickek@outlook.com</a>
        </p>
        <p>Discord:
          <a href="discord.gg"> Hatrickek#8051</a>
        </p>
      </div>
    ),
  },
  /* {
    title: 'Oxylus Engine',
    Svg: require('@site/static/img/OXLogo.svg').default,
    description: (
      <>
        My Vulkan based game engine. Read more about it in my <a href="blog/oxylus-engine-intro">blog. </a>
      </>
    ),
  },
  {
    title: 'Cyclone Remake',
    Svg: require('@site/static/img/OXLogo.svg').default,
    description: (
      <>
        Cyclone 1985 Remake I have made in Oxlyus. Read more about the devlogs I have made in my <a href="blog/oxylus-first-game">blog. </a>
      </>
    ),
  }, */
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        {description}
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
