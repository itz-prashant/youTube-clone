import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlinePodcasts } from "react-icons/md";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { GoLightBulb } from "react-icons/go";
import { AiOutlineFlag } from "react-icons/ai";

export const navData = [
  {
    name: "Home",
    icon: <IoMdHome />,
  },
  {
    name: "Reels",
    icon: <SiYoutubeshorts />,
  },
  {
    name: "Subscription",
    icon: <MdOutlineSubscriptions />,
    divider: true,
  },
  {
    title: true,
    name: "Trending",
    icon: <MdLocalFireDepartment />,
  },
  { name: "Shopping", 
    icon: <LiaShoppingBagSolid /> 
  },
  { 
    name: "Music", 
    icon: <CgMusicNote />, 
   },
  { name: "Movies", 
    icon: <FiFilm />, 
  },
  { name: "Live", 
    icon: <MdLiveTv />, 
  },
  { name: "Gaming", 
    icon: <IoGameControllerSharp />, 
  },
  { name: "News", 
    icon: <ImNewspaper />, 
  },
  { name: "Sports", 
    icon: <GiDiamondTrophy />, 
  },
  { name: "Courses", 
    icon: <GoLightBulb />
  },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
  },
  {
    name: "Podcast",
    icon: <MdOutlinePodcasts />,
    divider: true
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

export const topNavdata = ["All", "Javascript","Live", "Music", "Song", "AI", "Data type", "SQL", "Trading", "Rapping", "Filmy", "Trending", "Programming", "news", "Techmnology", "Comedy"]

const nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export const generateRandomName= ()=>{
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export const randomMessage = (length)=>{
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let randomText = "";

  for(let i=0; i<length; i++){
    const randomIndex = Math.floor(Math.random()*charset.length)
    randomText += charset[randomIndex]
  }
  return randomText
}
