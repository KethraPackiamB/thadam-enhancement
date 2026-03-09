const getCustomerById=async(id)=>{
    const res=await fetch(`http://localhost:5000/customers/${id}`)
    if(!res.ok){
        throw new Error("Customer Not Found")
    }
    const data=await res.json()
    return data;
}
export default getCustomerById;