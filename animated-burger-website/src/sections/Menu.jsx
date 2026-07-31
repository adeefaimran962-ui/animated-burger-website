import MenuCard from "../components/MenuCard";

import hero from "../assets/hero.png";
import fries from "../assets/fries.png";
import drinks from "../assets/drinks.png";


function Menu(){

return(

<section className="menu" id="menu">

<h2>Our Menu</h2>

<div className="menu-container">

<MenuCard
image={hero}
title="Classic Burger"
price="$8.99"
/>

<MenuCard
image={fries}
title="Crispy Fries"
price="$3.99"
/>

<MenuCard
image={drinks}
title="Cold Drinks"
price="$2.99"
/>

</div>

</section>

)

}

export default Menu;