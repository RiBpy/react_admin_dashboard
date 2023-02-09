import React,{useState} from 'react';
import ApexCharts from 'react-apexcharts';

const PieChart = ({singlePhone}) => {
let daraz=[],
gadget=[],
pickaboo=[]
singlePhone.map(dataObj=>{
  let seller=dataObj.seller
  return seller==="Daraz"?daraz.push(dataObj):seller==="Pickaboo"?pickaboo.push(dataObj):seller==="Gadget & Gear"?gadget.push(dataObj):0;
})

  const [options, setOptions] =useState({
    chart: {
      type: 'pie',
    },
    labels: ['Daraz', 'Pickaboo', 'Gadget & Gear'],
    legend: {
      position: 'right',
    },
    title: {
      text: 'Sources',
      style: { fontSize:25 },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  const [series, setSeries] =useState([
        daraz.length,pickaboo.length,gadget.length
  ]);
  return (
    <ApexCharts options={options} series={series} type="pie" />
  );
};
 

export  default PieChart


