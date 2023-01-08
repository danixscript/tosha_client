import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
// Import Swiper styles




// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function Caruseld() {
  let  items= [
    {id: 1, title: 'item #1'},
    {id: 2, title: 'item #2'},
    {id: 3, title: 'item #3'},
    {id: 4, title: 'item #4'},
    {id: 5, title: 'item #5'}
  ]
  return (
   <div className="commentswiper">
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide><div className="comm"><div className="lilcirc"></div>
          <p className="pc">מקום מושלם!!!
מאפים ברמה גבוהה, מדופדפים ועשירים בחמאה בדיוק כמו שאנחנו אוהבים!! 
שירות מדהים ואדיב של גל!
נוף לים..  מה צריך יותר מזה בחיים?😉</p></div></SwiperSlide>
        <SwiperSlide><div className="comm"><div className="lilcirc"></div>
          <p className="pc">הגענו לתושה בייקרי על הבוקר מהמרכז. גל העובד המתוק קיבל את פניינו באהבה ובחיוך וזה לגמרי היה כיף ונעים שיש כאלו אנרגיות במקום כזה פסטורלי ומהמם 
כל המאפים המתוקים והמלוחים היו מדהימים וטעימים.  
חד משמעית אני אחזור לתושה 
תודה❤️🫶🏻</p></div></SwiperSlide>
        <SwiperSlide><div className="comm"><div className="lilcirc"></div>
          <p className="pc">היינו, מקום נחמד מאפים טעימים שלל כריכים מומלץ להגיע👍</p></div></SwiperSlide>
        <SwiperSlide><div className="comm"><div className="lilcirc"></div>
          <p className="pc">מקום מקסים, צוות מהמם והאוכל להתעלף!!!</p></div></SwiperSlide>
        <SwiperSlide><div className="comm"><div className="lilcirc"></div>
          <p className="pc">מאפים מלוחים ומתוקים ברמה גבוהה מאוד. הכל טעים בצורה מוגזמת. שירות מצוין ונוף מדהים ביופיו . מומלץ בחום רב</p></div></SwiperSlide>
        <SwiperSlide><div className="comm"><div className="lilcirc"></div>
          <p className="pc">מקום מהמם, במאפים טעימים מאוד. נהנינו, תודה רבה🙏♥️</p></div></SwiperSlide>
        <SwiperSlide><div className="comm"><div className="lilcirc"></div>
          <p className="pc">מקום מדהים מפנק וטעים בטירוףףף כל מה שטעמנו היה חגיגה בפה
שירות מעל המצופה צוות מהמם 
יחזור לשם בקרוב מאד 😊</p></div></SwiperSlide>
      </Swiper>
   </div>
  );
}

export default Caruseld;