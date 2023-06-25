import * as React from "react"
import './global.scss'
import Header from "../components/Header"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";
import SectionHome from "../components/SectionHome";
import SectionAbout from "../components/SectionAbout";
import SectionContact from "../components/SectionContact";
import SectionPortfolio from "../components/SectionPortfolio";

const IndexPage = () => {
  const swiperRef = React.useRef(null)
  const [sectionActive, setSectionActive] = React.useState('home')

  const goToSection = (slideId) => {

    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const slideIndex = Array.from(swiper.slides).findIndex(
        (slide) => slide.id === slideId
      );
      setSectionActive('slideId')

      if (slideIndex >= 0) {
        swiper.slideTo(slideIndex);
      }
    }
  };

  React.useEffect(() => {
    goToSection('home')
  }, [])

  return (

    <>
      <Header setSection={goToSection} sectionActive={sectionActive} />
      <main>
        <Swiper
          grabCursor={false}
          autoHeight
          effect={"creative"}
          ref={swiperRef}
          creativeEffect={{
            prev: {
              opacity: 0,
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
          onSlideChange={() => setSectionActive(swiperRef.current.swiper.slides[swiperRef.current.swiper.activeIndex].id)}
        >
          <SwiperSlide id="home">
            <SectionHome />
          </SwiperSlide>
          <SwiperSlide id="about">
            <SectionAbout />
          </SwiperSlide>
          <SwiperSlide id="projects" >
            <SectionPortfolio sectionActive={sectionActive}/>
          </SwiperSlide>
          <SwiperSlide id="contact">
            <SectionContact />
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Cleyton Mendes</title>
