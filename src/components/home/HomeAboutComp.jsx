import React, { useState } from "react";
import '../../css/App.css'
import {  NavLink } from "react-router-dom";

function HomeAboutComp(props) {
 

  return (
    <div className="flexcol center homeAboutComp ">
        <div className="centerAllComp flexrow center">

            <div className="sideA">
                <div className="bgImage">
                    <div className="Square">

                    </div>

                </div>

            </div>
            <div className="sideB " >
               <div className="wordsSide">
               <h1 className="headersHome drtl flexcol ">
                    ברוכים הבאים אל תושה
                </h1>
                <div className="per">
                    <p className="p drtl">מאפיית ברמן, שנוסדה בשנת 1875 בירושלים, היא מהמאפיות הגדולות והמובילות בישראל, ומספקת לחם ודברי מאפה למאות אלפי בתי אב ברחבי הארץ.</p>
                </div>
                <div className="per">
                    <p className="p drtl">ברמן משלבת מסורת אפייה ארוכת שנים יחד עם הקפדה על איכות, ומציעה מגוון עשיר של לחמים: לחמי בריאות ולחמים דלי קלוריות, חלות, פיתות, לחמניות ומגוון גדול של עוגות ועוגיות. מאפיית ברמן משתרעת על שטח של כ-10,000 מ"ר באזור התעשייה בגבעת שאול בירושלים, ומשתמשת בטכנולוגיות מתקדמות לייצור, אפייה, פריסה ואריזה.</p>
                </div>
<br /><br /><br />
                <div className="">
                    <NavLink to={'/store'} className='buttonsAll' >לחנות שלנו</NavLink>
                </div>
               </div>

            </div>

        </div>

    </div>
  );
}

export default HomeAboutComp;
