import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);


    const onAddCategory = ( newCategory) =>{
      // console.log(NewCategory);
        if( categories.includes(newCategory) )  return;
        setCategories([ newCategory, ...categories])
        // setCategories([ ...categories, 'Valorant' ]);

    }

  return (
    <>
    {/* { titulo } */}
    <h1>GifExpertApp</h1>

    {/* Input */}
     <AddCategory
     // setCategorie8s={ setCategories }
     onNewCategory={ (value) => onAddCategory(value) }
     />
    {/* Listado de Gif */}

    <ol>
        {
            categories.map( category =>(
                <GifGrid key={ category } category={ category }/>
                // <div key={ category }>
                    //     <h3>{ category }</h3>
                    //     <li >{ category }</li>
                    // </div>

            ))
        }
    </ol>

        {/* Gif Item */}

    </>
  )
}
