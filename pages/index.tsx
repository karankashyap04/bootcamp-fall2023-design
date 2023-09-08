import type {NextPage} from 'next'
import Head from 'next/head'
import ScheduleItem from "../components/ScheduleItem";
import useScrollPosition from "../util/useScrollPosition";
import {useEffect, useState} from "react";
import LinkCard from "../components/LinkCard";

const workshops: { name: string; description: string; image: string; handout: string; slides?: string; recording?: string; }[] = [
    {
        name: "Day 1: TBD",
        description: "Start with the underlying technologies of the web: HTML, CSS, and Javascript.",
        image: "/basics.png",
        handout: "",
        slides: "",
        // recording: "https://brown.zoom.us/rec/share/uGXXyTsPD0g1Iq9B9Io7JClsrlD00Tf98ELdG6f5jrAyNPtqz5fV7oF8W3kQtfnu.RZhZiPMoNOeA1vp1",
    }, {
        name: "Day 2: TBD",
        description: "Build a server to persist and manipulate data for your web apps using Express and MongoDB.",
        image: "/backend.png",
        handout: "",
        slides: "",
        // recording: "",
    }];

const Home: NextPage = () => {
    const scrollPosition = useScrollPosition();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 300);
    }, []);

    return (<div>
        <Head>
          <title>FSAB Design Bootcamp Fall 2023</title>
          <meta property="og:title" content="FSAB Bootcamp Fall 2023" key="title" />
        </Head>
        <div
            className={"min-h-screen transition-opacity ease-in duration-500 " + (loaded ? "opacity-100" : "opacity-0")}>
            <div style={{backgroundImage: "url('/flare.jpg')", backgroundPosition: "bottom"}}>
                <div
                    className={`p-4 z-50 text-sm sm:text-base flex items-center justify-between fixed bg-opacity-40 transition-all duration-150 bg-[#06080D] backdrop-blur-lg w-full ${scrollPosition < 10 && "backdrop-blur-none bg-opacity-0"}`}>
                    <p className="font-bold">Full Stack at Brown</p>
                    <nav className="space-x-6">
                        {/* <a href="https://calendar.google.com/calendar/u/0?cid=Y181NGI4ODA2NmE3N2U0MTdiODZiOTQ3NzVjZjhmOWFjMDZjYTgxMzJlNzBmMWJmYzcxODUxODRhZjNmYzJhYjU3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Add
                            to Calendar</a> */}
                            <p>Add to calendar (TODO: Fix)</p>
                        {/* <a href="https://www.fullstackatbrown.com/about">About Us</a> */}
                    </nav>
                </div>
                <div className="max-w-5xl px-4 mx-auto pt-36 space-y-24">
                    <section>
                        <p className="text-lg md:text-xl font-mono uppercase">
                            Sep 11 — 12, 2023
                        </p>
                        <h1 className="mt-2 text-4xl md:text-6xl font-semibold">
                            Web Design Bootcamp
                        </h1>
                        <p className="text-xl md:text-2xl opacity-75 font-light mt-4">
                            Meet other Full Stack at Brown members and enjoy a light snack on us, all while learning modern web
                            design.
                            Throughout the bootcamp, you&pos;ll learn how to use the tools needed to design amazing
                            websites.
                        </p>
                        <p className="text-l md:text-xl opacity-75 mt-4">
                            Times: <strong>September 11 - 12, 8pm - 10pm</strong>
                        </p>
                        <p className="text-l md:text-xl opacity-75 mt-1">
                            Location: <strong>Barus & Holley 141</strong>
                        </p>
                        {/* <p className="text-l md:text-xl opacity-75 mt-1">
                            Zoom Link: <a className="underline" href="https://brown.zoom.us/j/96870814005">https://brown.zoom.us/j/96870814005</a>
                        </p> */}
                    </section>
                    <section>
                        <h2 className="text-3xl md:text-4xl">
                            Schedule
                        </h2>
                        <ul className="space-y-4 mt-4">
                            {workshops.slice(0, 2).map(workshop => <ScheduleItem key={workshop.name}
                                                                                 name={workshop.name}
                                                                                 description={workshop.description}
                                                                                 image={workshop.image}
                                                                                 handout={workshop.handout}
                                                                                 slides={workshop.slides}
                                                                                 recording={workshop.recording}/>)}
                        </ul>
                    </section>
                </div>
            </div>
            <div className="max-w-5xl px-4 mx-auto space-y-24 mt-4">
                <section>
                    <ul className="space-y-4">
                        {workshops.slice(2).map(workshop => <ScheduleItem key={workshop.name}
                                                                          name={workshop.name}
                                                                          description={workshop.description}
                                                                          image={workshop.image}
                                                                          handout={workshop.handout}
                                                                          slides={workshop.slides}
                                                                          recording={workshop.recording}/>)}
                    </ul>
                </section>
                <section>
                    <h2 className="text-3xl md:text-4xl">
                        More stuff
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <LinkCard title="Day 0: Setup???"
                                href=""
                                  description="Download and install the tools we'll use throughout the week."/>
                        {/*<LinkCard title="Download project starter"*/}
                        {/*          description="Clone the starter code for the project we'll build together."/>*/}
                        {/*<LinkCard title="View project demo"*/}
                        {/*          description="See a live demo of the project you'll build throughout the week."/>*/}
                        <LinkCard title="Submit your project for certification"
                                  href="???"
                                  description="Send us your completed bootcamp project to become eligible to work on projects for
                                    Full Stack."/>
                    </div>
                </section>
            </div>
            <footer>
                <p className="text-center opacity-40 mb-12 my-24">
                    © {(new Date()).getFullYear()} Full Stack at Brown. All rights reserved.
                </p>
            </footer>
        </div>
    </div>)
}

export default Home
