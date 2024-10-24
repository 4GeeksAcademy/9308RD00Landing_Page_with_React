import React from "react";
import {NaveBar} from "./naveBar" ;
import { Bigdiv } from "./bigdiv";
import { Footer } from "./footer";
import { Boxs } from "./boxs";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	var characters = [{
		name: "Smile 2",
		image:
		  "https://static.ipic.com/filmimage/HO00003044/Smile_2.jpg?width=400&maxWidth=400",
		  description:"About to embark on a new world tour, global pop sensation Skye Riley (Naomi Scott) begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.",
	  },
	  {
		name: "Beetljuice",
		image:
		  "https://all.web.img.acsta.net/img/88/01/8801185034fbb3e22b654c923f649201.jpg/r_2500_x",
		  description:"The Maitlands, a recently deceased couple, are unable to leave their New England home and are forced to haunt it after a car accident. When the Deetzes move in with their teenage daughter, Lydia, the Maitlands try to scare them away, but end up becoming the family's main attraction.",
	  },
	  {
	  name: "Deadpool & Wolverine",
		image:
		  "https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg",
		  description:"Marvel Studios’ ”Deadpool & Wolverine” finds Wade Wilson with his past as the morally flexible Deadpool behind him, until he suddenly finds himself in a fight for the survival of his homeworld and must suit-up again—and convince a reluctant Wolverine to help him.",
	  },
	  {
		name: "The Time Traveler's Wife",
		  image:
			"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5M--dYhp84VeJn-03ZQmZEygBdTUAtFKJKVoJ_TENS6CjCie9",
			description: "Chicago librarian Henry De Tamble (Eric Bana) suffers from a rare genetic disorder that causes him to drift uncontrollably back and forth through time. On one of his sojourns, he meets the love of his life, Claire (Rachel McAdams), and they marry.",
	  },
  ]
	return (
		<div className="text-center">
			<NaveBar/>
			<Bigdiv/>
			<div className="d-flex " >
				{characters.map(character=> (
					<Boxs name={character.name} image={character.image} description={character.description}/>))
				}
			</div>

			<Footer/>
		</div>
	);
};

export default Home;
