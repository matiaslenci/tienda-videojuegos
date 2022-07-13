import Item from  "../components/Item"
import ItemCount from "../components/ItemCount";

export const ItemListContainer = () => {
  return (
    <div>
        <Item image="../portGodOfWar.jpg" imgname="portada god of war" name="God of War" price={4199} description="Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre en los dominios de los dioses y monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir… y enseñar a su hijo a hacerlo también."/>
        <ItemCount stock={5} initial={1} />
        <Item image="../portFifa22.jpeg" imgname="portada fifa 22" name="FIFA 22" price={5499} description="FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos."/>
        <ItemCount stock={5} initial={1} />
        <Item image="../portCyberpunk.jpg" imgname="portada Cyberpunk 2077" name="Cyberpunk 2077" price={2199} description="Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales."/>
        <ItemCount stock={5} initial={1} />
    </div>
  )
}

export default ItemListContainer;