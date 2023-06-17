import Banner from "@/banner/Banner";
import TrustedBy from "@/trustedBy/TrustedBy";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <TrustedBy></TrustedBy> 
      </div>    
    </main>
  )
}
