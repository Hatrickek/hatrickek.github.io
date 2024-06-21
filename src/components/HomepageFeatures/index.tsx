import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "My Projects",
    Svg: require("@site/static/img/OXLogo.svg").default,
    description: (
      <p>
        <a href="https://github.com/Hatrickek">Projects I have worked on.</a>
      </p>
    ),
  },
  {
    title: "About me",
    Svg: require("@site/static/img/OXLogo.svg").default,
    description: (
      <p>
        20 yo graphics and systems programmer.<br></br>C++ and Rust enjoyer.
      </p>
    ),
  },
  {
    title: "Contact",
    Svg: require("@site/static/img/OXLogo.svg").default,
    description: (
      <div>
        <p>
          E-Mail:
          <a href="mailto:hatrickek@outlook.com"> hatrickek@outlook.com</a>
        </p>
        <p>
          Discord:
          <a href="discord.gg"> Hatrickek#8051</a>
        </p>
      </div>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */ }
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
