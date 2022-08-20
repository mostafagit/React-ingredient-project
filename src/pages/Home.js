import { useState , useEffect } from "react";
import CocktailsList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"

export default function Home() {

  const [loading,setLoading] = useState(false)
  const [searchTrem,setSearchTrem] = useState("a")
  const [cocktails,setCocktails] = useState([])

  useEffect(()=>{
    setLoading(true)
    
    const getDrink = async()=>{
        try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTrem}`)
        const {drinks} = await response.json()
        if(drinks){
        const newCocktails = drinks.map(item=>{
           const {idDrink,strAlcoholic,strDrinkThumb,strDrink,strGlass} = item
           return {id: idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
         })
         setCocktails(newCocktails)
        }else{
         setCocktails([])
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    
    getDrink()
  },[searchTrem])

  return(
<main>
  <SearchForm setSearchTerm={setSearchTrem} />
  <CocktailsList loading={loading} cocktails={cocktails}/>
</main>
  );
}
