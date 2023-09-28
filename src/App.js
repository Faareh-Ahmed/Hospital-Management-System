import Nav from './components/Nav'
import Hero from './components/Hero'
import Description from './components/Description'
import Contributors from './components/Contributors'
import Footer from './components/Footer'
import Test from './components/Test'
export default function App() {
  return (
    <main className="relative">
       <Nav/>
       <section className="x1:padding-1 wide:padding-r padding-b">
          <Hero/>
       </section>
       <section className="padding">
          <Description/>
       </section>
       <section className="padding-x sm:py-32 py-16 w-full">
          <Contributors/>
       </section>
       <section className="bg-black padding-r padding-t pb-08">
        <Footer/>
       </section>
      <Test/>
    </main>
  )
} 