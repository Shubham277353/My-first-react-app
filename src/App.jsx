function Card({title, description}){
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
} 

export default function App(){
  return(
    <Card title ="My card" description="This is my description." />
  )
}
