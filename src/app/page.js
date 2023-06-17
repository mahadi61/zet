import ChooseUs from "@/ChooseUs/ChooseUs";
import Customer from "@/Customer/Customer";
import Banner from "@/banner/Banner";
import Product from "@/product/Product";
import TrustedBy from "@/trustedBy/TrustedBy";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <TrustedBy></TrustedBy> 
      </div>  
      <Product></Product>  
      <Customer></Customer>
      <div className="max-w-6xl mx-auto">
      <ChooseUs></ChooseUs>
      </div>
    </main>
  )
}
