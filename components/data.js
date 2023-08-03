import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our Benefits",
  desc: "We will Build you a stunning website using React, Svelte, Vue, React, web components, or just plain HTML + JavaScript and other Content Management Systems of your Choice.",
  image: benefitOneImg,
  bullets: [
    {
      title: "We are Customer centric",
      desc: "We are customer inspired and your goals are our ultimate drive.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Timely delivery of Projects",
      desc: "We do not only just solve problems, we solve problems while we utilize time.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Skillsets",
      desc: "We have staff of exquisite skills and well grounded knowledge on Digital space which will build you any needed Solution",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "What we offer",
  desc: "See our different services.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Website Design and Development",
      desc: "Elevate your online presence with captivating websites that combine stunning design, seamless functionality, and user-centered experiences.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Social Media Management",
      desc: "We'll curate your brand's story across social platforms, creating meaningful interactions and a loyal online community.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
