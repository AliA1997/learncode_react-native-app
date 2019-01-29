import React from 'react';
import * as utility from '../utilities/functions';
import baseStyles from '../styles/base';
//import everything from d3 
import * as d3 from 'd3';
//import ART from react-native
import { ART, Dimensions, View, Text } from 'react-native';
///Get the needed property from your Art import.
//-Surface - bridges d3 and your app since react-native does not have access to the dom.
//provides a area where your d3 graph can be rendered.
const { Surface, Shape, Group } = ART;
const { height, width } = Dimensions.get("window");


const Donut = ({data, valueBasedOn, staticColors=false}) => {
    const surfaceHeight = 75;
    const surfaceWidth = 75;
    //Define each section for each object based on price.
    const sectionAngles = d3.pie().value(d => d[valueBasedOn])(data);
    
    //Define your svg path for your d3 graph.
    const path = d3.arc()
                .outerRadius(25)//Must be 1/2 of the chart heigth and width.
                .padAngle(.05) //defines the amount of whitespace between sectors. 
                .innerRadius(30);//Define the innter white space of donut.
    //Define the colors the for your donut graph.
    const colors = d3.scaleLinear()
                    .domain([0, data.length])
                    .range([200, 255]) 
    
    console.log(sectionAngles);
    return (
        <Surface height={surfaceHeight} width={surfaceWidth}>
            <Group x={surfaceHeight/2} y={surfaceWidth/2}>
                {
                    sectionAngles.map((section) => (
                            <Shape
                                key={section.index}
                                stroke={'#000'}
                                fill={utility.isStatic(staticColors, colors, section)}
                                d={path(section)}
                                strokeWidth={1}
                            />
                        )
                    )
                }
            </Group>
        </Surface>
    );
}

export default Donut;