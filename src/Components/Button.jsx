
import './button.css'
export default function Button(props) {

  

   function message(){
  // alert('Product of is  1 , which is {)} of brand'+ {this.name} + 'has of rupees 4000 is added in the cart , please proceed to pay !!!')
  alert("Product of No "+props.no+ " which is of brand "+props.name+ " has of rupees "+props.price+" is added in the cart , please proceed to pay !!! ")  
}
  return (
    <div>
      {/* <h1>{Brand}</h1> */}
      <button className="sbutton" onClick={message}>{props.Buttontext} </button>
    </div>
  )
}

