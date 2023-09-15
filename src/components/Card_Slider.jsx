import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';


const Card_Slider = ()=> {
    return (
      <div className="md:px-10 px-4">
      <Splide hasTrack={ false } options={
        {
          type:'loop',
          gap:'2rem',
          autoplay:true,
          width:"100%",
          padding:'10rem',
          perPage:1,
          breakpoints:{
            425:{
              padding:'0rem',
            },
            768:{
              padding:'1rem'
            },
          }
        }
      }>
          <SplideTrack className="mb-5">
            <SplideSlide className="bg-gradient-to-r mx-auto rounded-xl flex md:flex-nowrap flex-wrap items-center justify-between from-[#F469FF] to-[#7F8CFF] px-5 py-2">
              <div>
              <h3 className="text-white mb-5 font-mont text-4xl font-bold">Interdisciplinary <br /> Coaching</h3>
              <p className="font-garet text-white text-xl">Explore anything thats coming up for you right now with an AI trained to pull from many disciplines to support you.</p>
              </div>
              <div>
                <img className="w-full max-w-[250px] mx-auto" src="./assets/3d_ring.png" alt="" />
              </div>
            </SplideSlide>


          </SplideTrack>


          <div className="splide__arrows flex justify-end gap-5 pe-5">
            <button className="splide__arrow splide__arrow--prev text-white">
            <svg viewBox="0 -6.5 38 38" version="1.1" className="w-10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>left-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1641.000000, -158.000000)" fill="#ffffff" fill-rule="nonzero"> <g id="1" transform="translate(1350.000000, 120.000000)"> <path d="M317.812138,38.5802109 L328.325224,49.0042713 L328.41312,49.0858421 C328.764883,49.4346574 328.96954,49.8946897 329,50.4382227 L328.998248,50.6209428 C328.97273,51.0514917 328.80819,51.4628128 328.48394,51.8313977 L328.36126,51.9580208 L317.812138,62.4197891 C317.031988,63.1934036 315.770571,63.1934036 314.990421,62.4197891 C314.205605,61.6415481 314.205605,60.3762573 314.990358,59.5980789 L322.274264,52.3739093 L292.99947,52.3746291 C291.897068,52.3746291 291,51.4850764 291,50.3835318 C291,49.2819872 291.897068,48.3924345 292.999445,48.3924345 L322.039203,48.3917152 L314.990421,41.4019837 C314.205605,40.6237427 314.205605,39.3584519 314.990421,38.5802109 C315.770571,37.8065964 317.031988,37.8065964 317.812138,38.5802109 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "> </path> </g> </g> </g> </g></svg>
            </button>


            <button className="splide__arrow splide__arrow--next text-white">
            <svg viewBox="0 -6.5 38 38" version="1.1" className="w-10" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1511.000000, -158.000000)" fill="#ffffff" fillRule="nonzero"> <g id="1" transform="translate(1350.000000, 120.000000)"> <path d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
            
            </button>
          </div>
        </Splide>
      </div>
    );
  }


  export default Card_Slider