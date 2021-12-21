import {ListItem, ListControls, ListControl, ListCopy} from './styles';
import {BsTrash} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'

function Item ({children, ...props}) {
  return (
    <ListItem>
        <ListCopy>Lorem ipsum dolor sit amet consectetur!</ListCopy>
        <ListControls>
            <ListControl>
                <BsTrash />
            </ListControl>

            <ListControl>
                <AiOutlineEdit size="1.15rem"/>
            </ListControl>
        </ListControls>            
    </ListItem>
  )
}

export default Item