import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import ImageSlider from'@/components/LogoSlider'
import Link from 'next/link'
import Footer2 from '@/components/footer2'
import Footer from '@/components/footer'

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        
       


      </Head>
      <main className=''>
        <div className='home_section3 mainscr'>
       
       
        <section className="section ">

        <Navbar></Navbar>
    <div className="home_text">
      <div>
      <h2 className='home_text_st'>Access creative<br/> talent worldwide <br/>for original designs.</h2>

      </div>
      <div> 
      <form className="sr-div2 fl jst">
                <input type="text" name='' placeholder="Logo, Brand Identity, Packaging . . ." />
                <select name="test">
                  <option value="CONTESTPROJECT">CONTEST </option>
                  <option value="CONTESTPROJECT">PROJECT</option>
                </select>
                <input type="submit" name=''  value="Start" /> 
            </form>
            </div>
    </div>
    <div className='home_img'>
      <div>
      <Image
      src="home1.svg"
      alt="Imageeee"
      className="image"
      width={400}
      height={512}
      />
      </div>

     
    </div>
   
    
     <div className='home-h'>
  <h1 className='home-h1 home-su' id='fontbold'>IP PROTECTION FOR YOUR DESIGNS - 100% GUARANTEE</h1>
  </div>
  </section>
     
        </div>
        
        <section className=' mainscr section '>
        <h1 className='next_text_st'>Categories:</h1>
        <div className=' '>
        <ImageSlider></ImageSlider>
        </div>
       
        <div className='part'>
        <Link href="/categories2" className='Link1'>Get Started</Link>
        </div>
        </section>
        <section className=' mainscr'>
          <div className='part2'>
          <h1 className='home-h1 fs50' id='fs'>How it works & Experience</h1>
          </div>
          <section className="section m-tb-auto">
      <div className='w-50'>
        <h1 className="home2">Contest Steps</h1>
        <ol className='ol-home'>
          <li>Submit a creative brief</li>
          <li>Select a package and features</li>
          <li>Invite more designers</li>
          <li>Send feedback & rate</li>
          <li>Pick up the finalists for the final round</li>
          <li>Select the winner design</li>
          <li>File handover</li>
          <div className='lh-34'>
          <p>(copy transfer agreement -</p>
          <p>File review - Payment release)</p>
          </div>

        </ol>
      </div>
      <div className="w-50 prel">
        <Image src="home2.svg" alt="your-image" className='home3-img'  width={578} height={490}/>
        <Image src="home22.svg" alt="your-image" className='home33-img' width={578} height={490} />
      </div>
    </section>

    
    <section className="section m-tb-auto">
    <div className="w-43 prel">
        <Image src="home3.svg" alt="your-image" className='home3-img' width={578} height={490} />
        <Image src="home33.svg" alt="your-image" className='home33-img' width={578} height={490} />
      </div>
      <div className='w-51'>
        <h1 className="home3">Hiring Steps</h1>
        <ol className='ol-home'>
          <li>Submit a creative brief</li>
          <li>Invite a designer or send to your designer</li>
          <li>Discuss project details / Timeline & Budget</li>
          <li>Secure invoice</li>
          <li>Discuss the design & Send feedback</li>
          <li>Receive files & Release payment</li>
        </ol>
      </div>
     
    </section>

        </section>
        <section className='home_section3 mainscr h-8 '>
      <div className='ref-cont '>
            <h2 className='ref-h2'>Refer new Clients and you both get a cashback code $50 promotion free.</h2>
      <div>
      <label className='ref-lab'>Please invite new client</label>
      <div className='fl jst-SB'>
      <input className='ref-inp'></input>
      <button className='ref-btn' >COPY LINK</button>
      </div>
      </div>

      <div>   
      <label className='ref-lab'>Add Email addresses</label>            
      <div className='fl jst-SB'>
      <input className='ref-inp'></input>
      <button className='ref-btn'>INVITE CLIENT</button>
      </div>
      
      </div> 
      </div>
      </section>
      
        <Footer2/>
    
        <Footer/>
    
      </main>
    </>
  )
}
