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
    </main>
  )
}
