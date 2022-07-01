import classes from "./ServicesPage.module.css";
import Container from "../UI/Container/Container";
import Header from "../Header/Header";
import PriceList from "./PriceList/PriceList";
import SlideDownIcon from "../UI/SlideDownIcon/SlideDownIcon";
import Button from "./Button/Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Services = (props) => {
  const [selectedSaloon, setSaloon] = useState('');
  const [saloonName, setSaloonName] = useState('');

  const selectSaloonHandler = (e) => {
    if(e.target.id !== 'bialoleka' && e.target.id !== 'praga') return;
    setSaloon(e.target.id)
    if(e.target.id === 'bialoleka') setSaloonName('Białołęka')
    if(e.target.id === 'praga') setSaloonName('Praga')
  }

  return (
    <section id={props.id} className={classes.services}>
      <Container flexStart borders={true}>
        <Header title="Usługi" />
        <p className={classes['prices-description']}>Poznaj nasze ceny wybierając interesujący Cię salon</p>
        <div className={classes["dumb-block"]}/>
        <div onClick={selectSaloonHandler} className={classes["price-controls"]}>
          <Button id='bialoleka'  text='BIAŁOŁĘKA?' className={classes.btn}/>
          <FontAwesomeIcon icon={faDollarSign} size='2x' className={classes.icon}/>
          <Button id='praga' text='PRAGA?' className={classes.btn}/>
        </div>
        <div className={`${classes["dumb-block"]} ${classes['dumb-block-bottom']}`}/>
        {selectedSaloon === 'bialoleka' ? <div id="bialoleka-prices" className={classes["price-list-wrapper"]}>
        <p className={classes['prices-title']}>Cennik {saloonName}</p>
          <PriceList
            title="Włosy"
            prices={[
              ["Strzyżenie włosów + pielęgnacja", "80 zł"],
              ["Strzyżenie długich włosów + pielęgnacja", "100 zł"],
              ["Odświeżeanie fade - same boki", "60 zł"],
              ["Strzyżenie maszynką - jedna długość", "40 zł"],
              ["Dziecko 7-12 lat", "60 zł"],
              ["Ojciec + syn - strzyżenie", "130 zł"],
            ]}
          />
          <PriceList
            title="Broda"
            prices={[
              ["Strzyżenie/trymowanie brody + pielęgnacja", "60 zł"],
              ["Cover - farbowanie brody", "cena ustalana indywidualnie"],
            ]}
          />
          <PriceList
            title="Combo (Włosy + Broda)"
            prices={[
              ["Combo (włosy + broda)", "130 zł"],
              ["Combo (długie włosy + broda)", "150 zł"],
            ]}
          />
          <SlideDownIcon href='#gallery'/>
        </div> : null}
    
        {selectedSaloon === 'praga' ? <div id="praga-prices" className={classes["price-list-wrapper"]}>
        <p className={classes['prices-title']}>Cennik {saloonName}</p>
          <PriceList
            title="Włosy"
            prices={[
              ["Strzyżenie włosów + pielęgnacja", "70 zł"],
              ["Strzyżenie długich włosów + pielęgnacja", "90 zł"],
              ["Odświeżeanie fade - same boki", "50 zł"],
              ["Strzyżenie maszynką - jedna długość", "30 zł"],
              ["Dziecko 7-12 lat", "50 zł"],
              ["Ojciec + syn - strzyżenie", "120 zł"],
            ]}
          />
          <PriceList
            title="Broda"
            prices={[["Strzyżenie/trymowanie brody + pielęgnacja", "60 zł"],
            ["Cover - farbowanie brody", "cena ustalana indywidualnie"],]}
          />
          <PriceList
            title="Combo (Włosy + Broda)"
            prices={[
              ["Combo  (włosy + broda)", "110 zł"],
              ["Combo (długie włosy + broda)", "150 zł"],
            ]}
          />
          <SlideDownIcon href='#gallery'/>
        </div> : null}
    
      </Container>
    </section>
  );
};

export default Services;
