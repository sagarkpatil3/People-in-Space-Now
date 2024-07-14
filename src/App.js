import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [astronauts, setAstronauts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredAstronauts, setFilteredAstronauts] = useState([]);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((result) => {
        const enrichedAstronauts = result.people.map((person) => {
          const additionalDetails = astronautsList.find(
            (astro) => astro.name === person.name
          );
          return additionalDetails
            ? { ...person, ...additionalDetails }
            : person;
        });
        setAstronauts(enrichedAstronauts);
        setFilteredAstronauts(enrichedAstronauts);
      });
  }, []);

  let astronautsList = [
    {
      name: "Oleg Kononenko",
      craft: "ISS",
      nationality: "Russian",
      wikiUrl: `https://en.wikipedia.org/wiki/Oleg_Kononenko`,
      description: `As of July 2024, Kononenko has accumulated more than 1,030 days in space over the course of five long-duration missions (including his ongoing one-year mission) on the ISS. On 4 February 2024, at 07:30:08 UTC, he broke the record for the most time spent in space previously held by Gennady Padalka at 878 days.`,
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTiNX8kSBJZ0WsitktIvNzErQSOCSLL3b_9BfGwZ_aFIsClXtsD0W8MJqoELnSVHinH7XtzhNNYIr2nknE",
    },
    {
      name: "Nikolai Chub",
      craft: "ISS",
      nationality: "Russian",
      description: `Nikolai Chub ; Nikolai Chub ; Born. Nikolay Aleksandrovich Chub. (1984-06-10) 10 June 1984 (age 40). Novocherkassk, Rostov Oblast, Soviet Union`,
      wikiUrl: `https://en.wikipedia.org/wiki/Nikolai_Chub`,
      image:
        "https://www.nasa.gov/wp-content/uploads/2023/10/jsc2023e052792.jpg",
    },
    {
      name: "Tracy Caldwell Dyson",
      craft: "ISS",
      nationality: "United States of America",
      description: `Tracy Caldwell Dyson is an American chemist and NASA astronaut. She was a mission specialist on Space Shuttle Endeavour flight STS-118 in August 2007 and part of the Expedition 23 and Expedition 24 crew on the International Space Station from April 2010 to September 2010.`,
      wikiUrl: `https://en.wikipedia.org/wiki/Tracy_Caldwell_Dyson`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Tracy_E_Caldwell_portrait.jpg",
    },
    {
      name: "Matthew Dominick",
      craft: "ISS",
      nationality: "United States of America",
      description: `Matthew Stuart Dominick is a US Navy test pilot and NASA astronaut. He has more than 1,600 hours of flight time in 28 aircraft, 400 carrier-arrested landings, 61 combat missions, and almost 200 flight test carrier landings. He is currently on the ISS aboard the SpaceX Crew-8 mission.`,
      wikiUrl: `https://en.wikipedia.org/wiki/Matthew_Dominick`,
      image:
        "https://www.nasa.gov/wp-content/uploads/2023/03/50695503883-4f07ca4269-k.jpg",
    },
    {
      name: "Michael Barratt",
      craft: "ISS",
      nationality: "United States of America",
      description: `Michael Reed Barratt is an American physician and a NASA astronaut. Specializing in aerospace medicine, he served as a flight surgeon for NASA before his selection as an astronaut and has played a role in developing NASA's space medicine programs for both the Shuttle-Mir Program and International Space Station.`,
      wikiUrl: `https://en.wikipedia.org/wiki/Michael_Barratt_(astronaut)`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Michael_R._Barratt_2010_%28cropped%29_2.jpg",
    },
    {
      name: "Jeanette Epps",
      craft: "ISS",
      nationality: "United States of America",
      wikiUrl: `https://en.wikipedia.org/wiki/Jeanette_Epps`,
      description: `Jeanette Jo Epps is an American aerospace engineer and NASA astronaut. Epps received both her M. S. and Ph.D. degrees in aerospace engineering from the University of Maryland, where she was part of the rotor-craft research group and was a NASA GSRP Fellow.`,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqSVUXdnUpg7eobOoaKd_hDl4YcqRKcEdn91Lw0nyzmxoweC7",
    },
    {
      name: "Alexander Grebenkin",
      craft: "ISS",
      nationality: "Russian",
      description: `Jeanette Jo Epps is an American aerospace engineer and NASA astronaut. Epps received both her M. S. and Ph.D. degrees in aerospace engineering from the University of Maryland, where she was part of the rotor-craft research group and was a NASA GSRP Fellow.`,
      wikiUrl: `https://en.wikipedia.org/wiki/Jeanette_Epps`,
      image:
        "https://le-cdn.website-editor.net/s/393d1ebd568b43e8997a4e50b89fb8aa/dms3rep/multi/opt/Alexander+Grebenkin-640w.jpg?Expires=1723127969&Signature=AkygEf-b25D8ue8qCKKxuVPQcpZLo7JGX4NFpThQUmZrmrtUIq7OF~2WYLtBBCIb2LQQk8dn~FbzhP5lj6TBh3GvoULCysPCVJvQOY7AqqfLiDlclNLqcrzQCi7QtJzLQwVaI94D9DEAMoD8cnJIWzZ3I2sATdOISqRC89cg~MHgsTerIFIOh2Jaumk13cg-XrqEYdaO59ClimTn2yETtgLz0NjxBEZwi1gOO07bkOCE0~oRbhFmJq1G~NVKyBmVvM2S3HeO-MuB4s8LXB930B-jkOhRaIRsi0luvxRiX-ULoqLNWJUH10c-1yaf0l~GK-IsntXXI8eORI3iK7Ofxw__&Key-Pair-Id=K2NXBXLF010TJW",
    },
    {
      name: "Butch Wilmore",
      craft: "ISS",
      nationality: "United States of America",
      wikiUrl: `https://en.wikipedia.org/wiki/Barry_E._Wilmore`,
      description: `Barry Eugene "Butch" Wilmore is a NASA astronaut and United States Navy test pilot. He has had three spaceflights, the first of which was an 11-day Space Shuttle mission in November 2009, to the International Space Station.`,
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQL8XM2597TEDfCAWO_O36c-Tykh_iXDTlXaGZea42kIwFR_VvDXGhLBqspHzib1kN5ijNYudB2zzTdg5E",
    },
    {
      name: "Sunita Williams",
      nationality: "United States of America",
      craft: "ISS",
      wikiUrl: `https://en.wikipedia.org/wiki/Sunita_Williams`,
      description: `Sunita Lyn Williams is an American astronaut, United States Navy officer, and former record holder for most spacewalks by a woman and most spacewalk time for a woman. Williams was assigned to the International Space Station as a member of Expedition 14 and Expedition 15.`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/cb/Sunita_Williams.jpg",
    },
    {
      name: "Li Guangsu",
      craft: "Tiangong",
      nationality: "Chinese",
      wikiUrl: `https://en.wikipedia.org/wiki/Li_Guangsu`,
      description: `Li Guangsu is a Chinese fighter pilot and People's Liberation Army Astronaut Corps taikonaut`,
      image:
        "https://www.chinadailyhk.com/upload/main/image/2024/04/25/44d328593622b17d4b82664325720a12.jpg",
    },
    {
      name: "Li Cong",
      craft: "Tiangong",
      nationality: "Chinese",
      wikiUrl: `https://en.wikipedia.org/wiki/Li_Cong_(taikonaut)`,
      description: `Li Cong (Chinese: 李聪; born October 1989) is a Chinese fighter pilot and People's Liberation Army Astronaut Corps (PLAAC) taikonaut. Li launched on the Shenzhou 18 mission to the Tiangong space station.`,
      image:
        "https://english.news.cn/20240425/caf316a48ef2453bb7553396ecce2acf/20240425caf316a48ef2453bb7553396ecce2acf_519a53ca597e4f73aeed1b31ea8f4317.JPG",
    },
    {
      name: "Ye Guangfu",
      nationality: "Chinese",
      craft: "Tiangong",
      wikiUrl: `https://en.wikipedia.org/wiki/Ye_Guangfu`,
      description: `Ye Guangfu is a Chinese fighter pilot and People's Liberation Army Astronaut Corps (PLAAC) taikonaut selected as part of the Shenzhou program. Ye Guangfu.`,
      image:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSxZZSV2tEEJ-F8HOJ1HXbDJV_7sGBlJq5Wke5vHRo0pT33VFzw59hpgTcCCpbSZiHVtwxSztZ8FLKTymM",
    },
  ];

  useEffect(() => {
    const filtered = astronauts.filter((astronaut) => {
      return astronaut.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredAstronauts(filtered);
  }, [searchField, astronauts]);

  let onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="App">
      <div className="navbar">
        <h1 className="navbar-title">People in Space Now</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"search astronauts"}
        />
      </div>
      <CardList astronauts={filteredAstronauts} />
    </div>
  );
}

export default App;
