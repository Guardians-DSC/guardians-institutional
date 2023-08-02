import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { JSX } from 'react/jsx-runtime';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Conheça nossas células de estudo',
    Svg: require('@site/static/img/undraw_celulas.svg').default,
    description: (
      <>
        O curso de computação da UFCG incentiva os alunos a serem muitas vezes 
        autoditadas para com assuntos do seu interesse, o guardians vissa 
        juntar alunos e professores com interesses em comum para motivar 
        e impulsionar conhecimento!
      </>
    ),
  },
  {
    title: 'Descubra nossos Projetos',
    Svg: require('@site/static/img/undraw_projetos.svg').default,
    description: (
      <>
        Existem projetos que criam celulas de estudo e celulas de estudo que criam 
        projetos, conheça o trabalho dos nossos estudantes! 
      </>
    ),
  },
  {
    title: 'Leia o blog dos nossos estudantes',
    Svg: require('@site/static/img/undraw_blog.svg').default,
    description: (
      <>
        Que tal ficar por dentro de como é a rotina da celula de estudos? 
        Ficar sabendo de detalhes sobre a produção dos projetos? O que será que vem por aí?
        Saiba Mais no Blog dos Guardians!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
