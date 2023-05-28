import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ImageSlider from "@/components/LogoSlider";
import Link from "next/link";
import Footer2 from "@/components/footer2";
import Footer from "@/components/footer";
import React, { useEffect, useMemo, useState, useContext } from "react";
import {
  Logoidentity,
  Webdesign,
  ClothingMerchandise,
  ArtIllustration,
  Businessadvertising,
  industriesMenu,
  AllCategoriesItems,
  AllCategoriesAll,
} from "../components/consts";
import useAuth from "@/contexts/auth.contexts";

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const { user, setUser } = useAuth();
  const [isOpen, setOpen] = useState(false);

  const [AllCategories, setAllCategories] = useState("");
  const [AllCategoriesisOpen, setAllCategoriesOpen] = useState(false);
  function CategoryClick(item) {
    setSearch(item);
    setAllCategoriesOpen(false);
  }
  const [search, setSearch] = useState("");
  const cates = useMemo(() => {
    if (!search) return AllCategoriesAll;

    return AllCategoriesAll.filter((Category) => {
      if (Category.text) {
        if (Category.text.toLowerCase().includes(search.toLowerCase())) {
          return Category.text.toLowerCase().includes(search.toLowerCase());
        }
      }
    });
  }, [search]);

  function CategoryTyping(item) {
    setSearch(item);
    
    console.log(cates);
  }
  function projectType(){
    var select = document.getElementById('project_type');
    var value = select.options[select.selectedIndex].value;
    console.log(value)
  }


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <main className="">
        <div className="home_section3 mainscr">
          <section className="section ">
            <Navbar user={user}></Navbar>
            <div className="home_text">
              <div>
                <h2 className="home_text_st">
                  Access to talented
                  <br />
                  and creative designers
                  <br />
                  for original designs
                </h2>
              </div>
              <div>
                <form className="sr-div2 fl jst">
                  <div className="SelectCat" id="SelectAcat"  onClick={()=>setAllCategoriesOpen(!AllCategoriesisOpen)}>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => CategoryTyping(e.target.value)}
                      name=""
                      placeholder="Logo, Brand Identity, Packaging . . ."
                    />
                    <div
                      className="SelectMenu"
                      id={AllCategoriesisOpen ? "" : "DN"}
                      
                    >
                      <ul id="CatesSelect">
                        {cates.length > 0 ? (
                          cates.map((item) => (
                            <div key={item.id}>
                              <h4 type="button" className="CatH4">
                                {item.header}
                              </h4>
                              <button
                                type="button"
                                onClick={() => CategoryClick(item.text)}
                              >
                                {item.text}
                              </button>
                            </div>
                          ))
                        ) : (
                          <h4 type="button" className="CatH4">
                            Item not found.
                          </h4>
                        )}
                      </ul>
                    </div>
                  </div>
                  <select name="test" id="project_type">
                    <option value="CONTEST">CONTEST </option>
                    <option value="HIRING">HIRING</option>
                  </select>
                  <button type="submit" name="" value="Start" onClick={()=>projectType()} />
                </form>

              </div>
            </div>
            <div className="home_img">
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

            <div className="home-h">
              <h1 className="home-h1 home-su" id="fontbold">
                IP PROTECTION FOR YOUR DESIGNS - 100% GUARANTEE
              </h1>
            </div>
          </section>
        </div>

        <section className=" mainscr section ">
          <h1 className="next_text_st">Categories:</h1>
          <div className="max">
            <div className="cat-card-cont mb-32">
              <Link
                href="/categories2"
                className="cat-card"
                onClick={() => setOpen(!isOpen)}
              >
                <Image
                  src="catlogo1.svg"
                  alt=""
                  width={177.03}
                  height={177.03}
                />
              </Link>
              <Link
                href="/categories2"
                className="cat-card"
                onClick={() => setOpen(!isOpen)}
              >
                <Image src="catlogo2.svg" alt="" width={219.72} height={195} />
              </Link>
              <Link
                href="/categories2"
                className="cat-card"
                onClick={() => setOpen(!isOpen)}
              >
                <Image src="catlogo5.svg" alt="" width={67.05} height={64.46} />
              </Link>
              <Link
                href="/categories2"
                className="cat-card"
                onClick={() => setOpen(!isOpen)}
              >
                <Image src="catlogo3.svg" alt="" width={77.52} height={85.27} />
              </Link>

              <Link
                href="/categories2"
                className="cat-card"
                onClick={() => setOpen(!isOpen)}
              >
                <Image
                  src="catlogo4.svg"
                  alt=""
                  width={104.48}
                  height={83.58}
                />
              </Link>

              <Link
                href="/categories2"
                className={`cat-card drop-down-menu ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
              >
                <span>Others</span>
              </Link>
            </div>
          </div>
        </section>
        <section className=" mainscr">
          <div className="part2">
            <h1 className="home-h1 fs50" id="fs">
              How it works & Experience
            </h1>
          </div>
          <section className="section m-tb-auto">
            <div className="w-40">
              <h1 className="home2">Contest Steps</h1>
              <ol className="ol-home">
                <li>Submit a creative brief</li>
                <li>Select a package and features</li>
                <li>Invite more designers</li>
                <li>Send feedback & rate</li>
                <li>Pick up the finalists for the final round</li>
                <li>Select the winner design</li>
                <li>File handover</li>
                <div className="lh-34">
                  <p>(copy transfer agreement -</p>
                  <p>File review - Payment release)</p>
                </div>
              </ol>
            </div>
            <div className="w-56 prel">
              <Image
                src="home2.svg"
                alt="your-image"
                className="home3-img"
                width={578}
                height={490}
              />
              <Image
                src="home22.svg"
                alt="your-image"
                className="home33-img"
                width={578}
                height={490}
              />
            </div>
          </section>

          <section className="section m-tb-auto">
            <div className="w-56 prel">
              <Image
                src="home3.svg"
                alt="your-image"
                className="home3-img"
                width={578}
                height={490}
              />
              <Image
                src="home33.svg"
                alt="your-image"
                className="home33-img"
                width={578}
                height={490}
              />
            </div>
            <div className="w-40">
              <h1 className="home3">Hiring Steps</h1>
              <ol className="ol-home">
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
        <section className="home_section3 mainscr h-8 ">
          <div className="ref-cont ">
            <h2 className="ref-h2">
              Refer new Clients and you both get a cashback code $50 promotion
              free.
            </h2>
            <div>
              <label className="ref-lab">Please invite new client</label>
              <div className="fl jst-SB">
                <input className="ref-inp"></input>
                <button className="ref-btn">COPY LINK</button>
              </div>
            </div>

            <div>
              <label className="ref-lab">Add Email addresses</label>
              <div className="fl jst-SB">
                <input className="ref-inp"></input>
                <button className="ref-btn">INVITE CLIENT</button>
              </div>
            </div>
          </div>
        </section>

        <Footer2 />

        <Footer />
      </main>
    </>
  );
}
