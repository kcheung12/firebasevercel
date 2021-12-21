import {useState,useEffect} from 'react'
import {doc,getDoc} from 'firebase/firestore'
import {db} from 'libs/firebase'
import {useAuth} from 'libs/hooks/useAuth'
import { AppBar } from "components/appbar";
import {Title} from "ui/title"
import {ToDoList} from 'components/todos/item'


function ToDoPage(props) {
    const user = useAuth()
    const [todos, setToDos] = useState(null)
    useEffect(()=>{
      
      async function getUserToDos(){
        const docRef = `todos/${user.uid}`
        const userDoc = await doc(db, docRef)
        const userToDos = await getDoc(userDoc)
        // const newObj = Object.assign({},todos, userToDos.data())
        setToDos(Object.assign({}, userToDos.data()))
      }
      if(user){
        getUserToDos()
      }

    },[user])

    if(!user){
      <>
      <AppBar/>
      <Title>YOUR NOT WELCOME GO AWAY</Title>
      </>
    }

    return (
      <>
      <AppBar/>
      <header style={{textAlign:"center"}}>
      <Title>Your To Do List</Title>
      <p>User To Do List</p>     
      </header>
      <ToDoList toDoItems={todos}/>
      </>
    )
  
}

export default ToDoPage;
