import React from 'react'
import { Slide, Slider, Caption, } from 'react-materialize'

export default function News() {
    return (
        <Slider
            fullscreen={false}
            options={{
                duration: 500,
                height: 400,
                indicators: true,
                interval: 6000
            }}
        >
            <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/1" />}>
                <Caption placement="center">
                    <h3>
                        Have a nice day!!!
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Have a nice time!!!
                    </h5>
                </Caption>
            </Slide>
        </Slider>
    )
}
