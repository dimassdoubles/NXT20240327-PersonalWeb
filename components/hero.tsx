import Link from "next/link"
import {Button} from "./ui/button"
import {Divide, Download, Send} from "lucide-react"

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from "react-icons/ri"

import DevImage from "./dev-image"
import Badge from "./badge"
import Socials from "./socials"



const Hero = () => {
    return (
        <section className="h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* text */}
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Software Developer</div>
                        <h1 className="h1">Hello there, Dimas Saputro here 👋</h1>
                        <p className="subtitle max-w-[490px]  xl:mx-0 mt-5">
                            Brief description with insights into myself, my vocational journet, and what I engage in proffesionally.
                        </p>
                        <div className="flex flex-row gap-y-3 gap-x-3 xl:mx-0 mb-12">
                          <Link href="/contact">
                            <Button className="gap-x-2">
                              Contact me 
                              <Send size={18}/>
                            </Button>
                          </Link>

                          <Button variant="secondary" className="gap-x-2">
                            Download CV 
                            <Download size={18}/>
                          </Button>
                        </div>

                        <Socials contianerStyles="flex gap-x-6" iconStyles="text-foreground text-[22px] hover:text-primary transition-all"/>
                    </div>

                    {/* image */}
                    <div className="hidden xl:flex relative">
                      <Badge containerStyles="" icon={<RiBriefcase4Fill/>} endCountNum={2} endCountText="Hello" badgeText="World"/>

                      <div className="bg-hero_shape2_light dark:bg-hero_shape2_dart w-[500px] h-[500px] bg-no-repeat absolute-top-1 -right-2">
                        <DevImage containerStyles="bg-hero_shape w[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc="/hero/developer.png"/>
                      </div>
                    </div>

                    {/* icons */}
                    <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                        <RiArrowDownSLine className="text-3xl text-primary"/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
