const Testing=()=>{
      
fetch("http://localhost:5000/")
  .then(res => res.text())
  .then(console.log)
   
    return(
        <div>
            fetch
        </div>
    )
}
export default Testing;