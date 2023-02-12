import React from "react";
import Chart from "react-apexcharts";

function BarChart({singlePhone}) {
     let official=[]
     let unOfficial=[]
     let noWar=[]
     let used=[]
     singlePhone.map(dataObj=>{
      if(dataObj.officialWar){
        return official.push(dataObj)
      }else if(dataObj.unOfficialWar){
        return unOfficial.push(dataObj)
      }else if(dataObj.used){
        return used.push(dataObj)
      }else if(dataObj.noWar){
        return noWar.push(dataObj)
    }
  })
    let avgOfficial=official.length>0?Math.ceil(official.map(of=>of.price).reduce((a,b)=>a+b)/official.length):[]
    let avgUnOfficial=unOfficial.length>0?Math.ceil(unOfficial.map(of=>of.price).reduce((a,b)=>a+b)/unOfficial.length):[]
    let avgUsed=used.length>0?Math.ceil(used.map(of=>of.price).reduce((a,b)=>a+b)/used.length):[]
    let avgNoWar=noWar.length>0?Math.ceil(noWar.map(of=>of.price).reduce((a,b)=>a+b)/noWar.length):[]
  return (
    <>
      <div className="container mb-5">
        <Chart
          type="bar"
          width={500}
          height={400}
          series={[
            {
              data: [avgOfficial,avgUnOfficial,avgNoWar,avgUsed]
            }
          ]}
          options={{
            title: {
              text: "Conditions",
              style: { fontSize:25 },
            },

            colors: ["#27829c"], 
            xaxis: {
              categories: [
                "Official",
                "Unofficial",
                "Without Warranty",
                "Used",
              ]
            },
            yaxis: {
              labels: {
                style: { fontSize: "15", colors: ["#bbb"] },
              }
            }
          }}
        ></Chart>
      </div>
    </>
  );
}

export default BarChart;