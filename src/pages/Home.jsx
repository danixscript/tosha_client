import "../css/App.css";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import HomeCards from "../components/home/HomeCards";
import TreeCards from "../components/home/TreeCards";
import HomeAboutComp from "../components/home/HomeAboutComp";
import Logo from '../image/a3.jpeg'

function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);




  return (
    <div className=" flexcol center w100  h100">
      <div className="centerinuu"></div>
<br />
<h1 className="headers">
 מאפיית טושה
</h1>
<div className="kavkav"></div>
<br />
<br />
<br />
      <div className="logoSite flexcol center">
       
        <img src={Logo} className='img maxmin rotate' alt="" />
      </div>
<br />
     <HomeAboutComp/>
     <br /><br /><br /><br /><br />

     <div className="bgfixc">

     </div>
    </div>
  );
}

export default Home;
