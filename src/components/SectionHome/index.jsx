import React from 'react'
import './styles.scss'

import GifLinkedin from '../../images/linkedin.gif'
import Gifgithub from '../../images/github.gif'
import EuMesmo from '../../images/nobackMe.png'
import ArrowRight from '../../images/arrow-right.gif'

const SectionHome = () => {
  return (
    <section>
      <div className='home__main-container'>
        <div className='home__name-content'>
          <div>
            <h2>Cleyton<br />Mendes<span>.</span></h2>
            <p>-</p>
          </div>
          <div className='home__image-container'>
            <img src={EuMesmo} alt="" />
          </div>
        </div>
        <div className='home_infos-container'>
          <div className='home__social-medias'>
            <a href="https://www.linkedin.com/in/cleyton-mendes-199138b5/" title='LinkedIn - Cleyton' target='_blank' rel="noreferrer"><img src={GifLinkedin} alt="linkedin" /></a>
            <a href="https://github.com/cleytonmendest" title='Github - Cleyton' target='_blank' rel="noreferrer"><img src={Gifgithub} alt="github" /></a>
          </div>
          <div className='home__info-drag'>
            <p>Arraste para o lado</p>
            <img src={ArrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className='home__content-container'>
        <h6 className='home__initial-text'>- Introdução</h6>
        <h4>Desenvolvedor Front-End com experiência em E-commerce.</h4>
        <p>Desenvolvedor com 2 anos de experiência em e-commerce VTEX, especializado em React, SASS entre outros frameworks. Conhecimento sólido na plataforma VTEX, capaz de criar soluções personalizadas e eficientes. Comprometido, criativo e colaborativo, com habilidades para enfrentar desafios e entregar resultados de alta qualidade dentro dos prazos.</p>
      </div>
    </section>
  )
}

export default SectionHome