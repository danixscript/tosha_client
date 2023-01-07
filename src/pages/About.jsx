import "../css/App.css";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import HomeCards from "../components/home/HomeCards";
import TreeCards from "../components/home/TreeCards";
import HomeAboutComp from "../components/home/HomeAboutComp";
import Img1 from '../image/toshappl.jpg'
import Img2 from '../image/toshappl2.jpg'
import Logo from '../image/a3.jpeg'

import Img3 from '../image/toshappl3.jpg'



function About() {
  const user = useSelector((state) => state.user);
  console.log(user);




  return (
    <div className=" flexcol center w100  h100">
      <div className="centerinuu2"></div>
      <br />
<h1 className="headers">
  תושה בייקרי
</h1>
<div className="kavkav"></div>
<br />

<div className="aboutwords">
  <h1 className="h1">קצת עלינו</h1>
  <p className="pclient tac">
  שחף אברהם ותומר סויסה הם חברים מהצפון שעבדו יחד מספר שנים. לאחר הרבה שנים של ניסיון במסעדות מובילות בארץ, החליטו השניים להגשים את חלומם המשותף ופתחו את תושה בייקרי מקור השם הוא הלחמה של שמותיהם – תומר ושחף.
תומר, שלמד אצל האנס וגלית ברטלה, אצל אסטלה וגם עשה סטאז' בצרפת; יוצר עוגות ומאפים שהם יפים לא פחות מאשר טעימים. המקום מעוצב באקלקטיות נעימה באוויר הפתוח עם אווירה נעימה, מקומות ישיבה מרובים בפינות ייחודיות ברחבי המתחם- מתחם צעיר ומרענן בנוף.
ניתן לשבת בנעימים במקום ולהזמין ממגוון המטעמים בתפריט-מגוון רחב של מאפים ומוצרי קונדיטוריה -עוגות שמרים, עוגות בחושות, עוגות שוקולד וגבינה, מוסים, קרואסונים, עוגיות ועוד לצד קפה טעים ואיכותי.
תוכלו להתפנק גם במגוון מנות ביניים מירקות טריים ושונים תוצרת האזור כגון לביבות זוקיני, צלחת סלקים צלויים ועוד.
במקום קיימים גם מוצרי מעדניה שניתן לקנות הביתה או כמתנה בשילוב יין משובח וכמובן מטעמי הקונדיטוריה.
בנוסף, קיימים גם זרי פרחים מהממים תוצרת שוק פרחים באילו שתוכלו לרכוש ולשמח אהובים או לקשט את ביתכם.

  </p>

  <p className="pclien">
  אנחנו מוכנים עם הדוכן שלנו בשוק האיכרים והאמנים בפאב הפרה, שבי ציון. נהיה כאן עד אחה״צ. מוזמנים
  </p>
</div>
<br /><br /><br />
<div className="logoSite flexcol center">
       
       <img src={Logo} className='img maxmin rotate' alt="" />
     </div>
     <br /><br />
      <div className="grid-3-r padf">
        <div className="pplimg"><img src={Img1} alt="" className="img imgr" /></div>
        <div className="pplimg"><img src={Img2} alt="" className="img imgr" /></div>

        <div className="pplimg"><img src={Img3} alt="" className="img imgr" /></div>

      </div>

    </div>
  );
}

export default About;
