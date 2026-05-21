// import { useState } from 'react'
import { Card } from './components/Card';
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'

// import type {ChaiList} from './components/ChaiList'
import { OrderForm } from './components/OrderForm'
function App() {
  return (
    <>
    <div>
      <h1>
        <ChaiCard name="Headphones" price={5000}/>
        <ChaiCard name="iPhone" price={80000}/>
      </h1>
    </div>
    <div>
      <Counter/>
    </div>
    {/* <div>
      <ChaiList items={menu}/>
    </div> */}
    <div>
      <OrderForm
      onSubmit={(order)=> {
        console.log("Placed ",order.name, order.cups);
      }}
      />
    </div>
    <div>
      <Card
      title="Chai aur typescript" 
      footer={<button>Order Now</button>}
      />
    </div>
    </>
  )
}

export default App
