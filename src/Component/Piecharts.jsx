import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,Tooltip,Legend,
    plugins
} from "chart.js"
import { Doughnut } from 'react-chartjs-2'


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)


function Piecharts({BMI}) {
    
    const guageNeedle = {
        id: "guageNeedle",
        afterDatasetsDraw(chart, arg, plugins){
            const {ctx, data} = chart;
    
            const centerX  = chart.getDatasetMeta(0).data[0].x
            const centerY  = chart.getDatasetMeta(0).data[0].y
            const innerRadius  = chart.getDatasetMeta(0).data[0].innerRadius
            const outerRadius  = chart.getDatasetMeta(0).data[0].outerRadius
    
            const angle = Math.PI / 180
    
            const thickness = outerRadius - innerRadius
    
            function sumArray(arr){
                return arr.reduce((acc, curr) => acc + curr, 0)
            }        
    
            const dataPointArray = data.datasets[0].data.map((
                datapoint, index) => {
                    return datapoint
                })
    
                const pointerValue = BMI;
                const totalSum = sumArray(dataPointArray);
                const datapointPercentage = pointerValue / totalSum * 100;
                const targetPointerRotation = (pointerValue / totalSum *180) -90
    
                ctx.save()
    
                ctx.translate(centerX,centerY)
                ctx.rotate(angle * targetPointerRotation)
                ctx.beginPath()
                ctx.fillStyle = "balck"
                ctx.roundRect(0 -3,0 - outerRadius -6,5,thickness +12,5)
                ctx.fill()
                ctx.restore()
    
                ctx.font = '20px sans-serif'
                ctx.fillStyle = "gray"
                ctx.fillText('BMI' , centerX -20, centerY -35)
                ctx.fillStyle = "black"
                ctx.fillText(BMI , centerX -25, centerY -10)
            console.log(BMI);
            
        }
    }

    return (
        <>
        <div className="container pie d-flex justify-content-center align-items-center shadow border rounded">
            <Doughnut data={{
                datasets:[{
                    label:["Underweight","Normal","Overweight"],
                    data:[13.3,13.3,13.3],
                    backgroundColor:["blue","green","red"],
                    borderColor:["blue","green","red"],
                    circumference: 180,
                    rotation: 270,
                }]
            }}
            options={{aspectRatio:1.6,layout:{padding:10}}}
            plugins={[guageNeedle]}
            />
        </div>
        </>
    )
}

export default Piecharts