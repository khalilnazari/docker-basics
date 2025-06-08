import { useEffect, useState } from 'react'
import './App.css'

type ItemTypes = {
    id:number; 
    name: string; 
    value: number; 
  }

type DataType = {
  items: ItemTypes[]; 
}

function App() {
  const [data, setData] = useState<ItemTypes[] | null>(null)

  const getData = async () => {
    const response = await fetch('http://localhost:5000/api/data'); 
    const data : DataType = await response.json()
    setData(data?.items)
  }

  console.log(data)


  useEffect(() => {
    getData(); 
  },[])

  return (
    <>
      <div style={{display:"flex", flexDirection:"column", gap:"10px", margin:'10px', padding:"10px"}}>
      {data?.map(item => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>NAME: {item.name}</p>
          <p>VALUE: {item.value}</p>
        </div>
      ))}
      </div>
    </>
  )
}

export default App
