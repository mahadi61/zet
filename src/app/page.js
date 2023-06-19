import ChooseUs from "./home/ChooseUs/ChooseUs";
import Customer from "./home/Customer/Customer";
import Earning from "./home/Earning/Earning";
import Banner from "./home/banner/Banner";
import Product from "./home/product/Product";
import TrustedBy from "./home/trustedBy/TrustedBy";



export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <TrustedBy></TrustedBy> 
      </div>  
      <Product></Product>  
      <Customer></Customer>
      <div className="max-w-6xl mx-auto">
     <ChooseUs></ChooseUs>
      </div>
      <Earning></Earning>
    </main>
  )
}
