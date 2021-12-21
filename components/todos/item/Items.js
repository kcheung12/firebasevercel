import {ListContainer} from './styles';

function List ({children, toDoItems, ...props}) {
    // object
    if(toDoItems){
        const keys = Object.keys(toDoItems)
        keys.map(key=>{
            console.log(toDoItems[key])
        })
    }

  return (
    <ListContainer>
        {children}
    </ListContainer>
  )
}

export default List