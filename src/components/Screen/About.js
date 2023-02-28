import React from 'react'
import { Carousel } from 'react-materialize'
export default function About() {
  return (

    <Carousel
      carouselId="Carousel-98"
      images={[
        'assets/img/father.jpg',
        'assets/img/sw.jpg',
        'assets/img/father.jpg',
        'assets/img/f8.jpg',
        'assets/img/f7.jpg',
        'assets/img/f9.jpg',
        'assets/img/av1.jpg',
        'assets/img/av2.jpg',
        'assets/img/endgame.jpg'
      ]}
      options={{
        dist: -100,
        duration: 200,
        fullWidth: false,
        indicators: false,
        noWrap: false,
        numVisible: 5,
        onCycleTo: null,
        padding: 0,
        shift: 0
      }}
    />

  )
}
