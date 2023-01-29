import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

const generateDataSet  = () => {
    return Array(10).fill(0).map(() => {
        return {
            coord: [Math.round((Math.random() * 400)), Math.round((Math.random() * 400))],
            size : Math.round((Math.random() * 30)),
            color : 'cyan'
        }
    })
}

export default function D3Scene(){

    const ref = useRef();
    const [dataSet, useDataSet] = useState(generateDataSet())

    useEffect(() =>{
        const svgElement = d3.select(ref.current);

        svgElement.selectAll('circle')
        .data(dataSet)
        .join('circle')
        .attr('cx', d => d.coord[0])
        .attr('cy', d => d.coord[1])
        .attr('r', d => d.size)
        .attr('fill', d => d.color)

        // svgElement.append('cirlce')
        // .attr('cx', 10)
        // .attr('cy', 10)
        // .attr('r', 30)
    }, [])

    return (() =>{
        d3.selectAll('circle').remove();
    })

}