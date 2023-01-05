import "../css/App.css";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import HomeCards from "../components/home/HomeCards";
import TreeCards from "../components/home/TreeCards";
import HomeAboutComp from "../components/home/HomeAboutComp";
import Logo from '../image/a3.jpeg'

function About() {
  const user = useSelector((state) => state.user);
  console.log(user);




  return (
    <div className=" flexcol center w100  h100">
      <div className="centerinuu"></div>

      

    </div>
  );
}

export default About;
