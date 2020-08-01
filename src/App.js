import React, { useState,useEffect } from 'react'
import firebase from './firebase'

const useData = endpoint =>{
    const [data,setData] = useState({})
    useEffect(() => {
        const ref = firebase.database().ref(endpoint)
        ref.on('value', snapshot => {
            console.log(snapshot.val())
            setData(snapshot.val())
        })
        return()=>{
            ref.off()
        }
    },[endpoint])
    return data
}

const useDataBasePush = endpoint =>{
    const[status,setStatus]=useState('')

    const save = data=>{
        const ref = firebase.database().ref(endpoint)
        ref.push(data,err=>{
            if(err)
                setStatus('FAILURE')
            else
                setStatus('SUCCESS')
        })
    }

    return [status,save]

}

const Comment=({comment})=>{
    return(
        <div>
            {comment.content} por {comment.user.name}
        </div>
    )
}

const Comments = ()=>{
    const data = useData('comments')  
    if(!data)
        return <h1>Nenhum comentario até o momento</h1>  
    
    const ids = Object.keys(data)
    if(ids.length===0){
        return <p>Loading...</p>
    }
    return(ids.map(id=>{
        return <Comment key={id} comment={data[id]}/>
    }))
}


export default function App() {
    const [,save]=useDataBasePush('comments')
    return (
        <div>
            <button onClick={()=>{
                save({
                    content: 'Hello, this is my firt commentary',
                    user:{
                        name:'Wilson',
                        id:1
                    }
                })
            }}>Toggle</button>
            <Comments/>
        </div>
    )
}
