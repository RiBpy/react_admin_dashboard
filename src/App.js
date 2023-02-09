import { useState } from 'react';
import AllData from './components/AllData';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import Data from './db';
function App() {
  const [phoneObject,setPhoneObject]=useState(Data)
  
  const searchText=(text)=>{
    text.length>0?setPhoneObject(
      phoneObject.filter(phone=>{
        return phone.brand.toLowerCase()===text.toLowerCase()||phone.phone_title.toLowerCase()===text.toLowerCase()
      })
    ):setPhoneObject(Data)
  }
  let singlePhone=phoneObject.map(item=>{
    return {
      id:item._id,
      img:item.phone_images?.length?item.phone_images[0]:"https://res.cloudinary.com/towfiqu/image/upload/fl_progressive:steep/v1602744218/masterdeals_v_2.0/biuy8h9emggyzcqefxym.jpg",
      brand:item?.brand,
      title:item?.phone_details?.model,
      ram:item?.phone_details?.ram?item?.phone_details?.ram:item.ram,
      rom:item?.phone_details?.internal_storage?item?.phone_details?.internal_storage:item.rom,
      price:item?.phone_price,
      rearCam:item?.phone_details?.mainCamera,
      selfieCam:item?.phone_details?.selfieCamera,
      microSD:item?.phone_details?.external,
      display:item?.phone_details?.displayType,
      displayRes:item?.phone_details?.displayRes,
      chipset:item?.phone_details?.chipset,
      seller:item?.seller_name,
      addCat:item?.ad_category,
      used:item?.used_phone,
      officialWar:item?.official_warranty,
      unOfficialWar:item?.unofficial_warranty,
      noWar:item?.no_warranty,
      more4:item?.more_than_4,
      lest4:item?.less_than_4,
      more64:item?.more_than_64,
      less64:item?.less_than_64,
      tags:item.tag,
    }
  })
  return (
    <div className="App">
         <Navbar onSubmit={searchText} setPhoneObject={setPhoneObject}/>
         <div className='container'>
            <div className='row my-5'>
              <div className='col-md-6'><PieChart singlePhone={singlePhone}/></div>
              <div className='col-md-6'> <BarChart singlePhone={singlePhone}/></div>
            </div>
         </div>
                <div className='container' >
                  <div className='row my-5'>
                    <div className='col-md-12 '>
                      <AllData singlePhone={singlePhone}/>
                    </div>  
                  </div>
                </div>
            
         <div className='container'>
             <div className='row my-5'>
                <div className='col-md-12 '>
                  {singlePhone.length?<Spinner/>:null}
                </div>  
             </div>
         </div>
    </div>
  );
}

export default App;
