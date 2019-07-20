import React from "react";
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
// bring in URLs from dotenv
// require("dotenv").config({ path: "../.env" });

import ImageGallery from "react-image-gallery";

class App extends React.Component {
  componentDidMount() {
    const listingIds = [
      81814051,
      95525599,
      156698406,
      192043201,
      229690062,
      250210237,
      251875541,
      266800276,
      294523241,
      387609724,
      471994052,
      477367545,
      483226155,
      492830503,
      494429446,
      495714238,
      503202956,
      526716567,
      539684503,
      539773739,
      549091140,
      563144227,
      564571125,
      568885963,
      569143841,
      573081262,
      575896704,
      582878765,
      585192650,
      586414372,
      590644735,
      590736934,
      591749912,
      592953142,
      594193748,
      595435134,
      615323932,
      615522908,
      615793374,
      619203265,
      631415799,
      632855773,
      633905558,
      635333355,
      642244040,
      643366643,
      644679516,
      645238286,
      650884544,
      664095876,
      664147439,
      665514126,
      665847970,
      666022574,
      668870898,
      672364753,
      674905924,
      675323094,
      676539898,
      683199142,
      684581264,
      687067299,
      687552734,
      689079899,
      689171821,
      695865940,
      696110752,
      701674987,
      703797171,
      705585130,
      705588518,
      705588554,
      705588604,
      705588638,
      705588706,
      705588756,
      705921784,
      706474050,
      706474076,
      706474098,
      706474148,
      706474154,
      710448049,
      714225313,
      718478657,
      718746201,
      719444563,
      719444651,
      719445263,
      719445367,
      719445611,
      720031167,
      720201609,
      720333151,
      720333803,
      720333827,
      720333829,
      720333943,
      720333947,
      720334099
    ];
    this.fetchImg(listingIds[0]);
  }

  fetchImg(listingId) {
    let url = `http://imagecarousel-env.7dyuk9dfpj.us-east-2.elasticbeanstalk.com/images/${listingId}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        // clearTimeout(timeout);
        // if (!didTimeout) {
        console.log("response.data[0]: ", response.data[0])
        return response.text();
        // }
      })
      .then(body => console.log(body));
  }

  render() {
    const images = [
      {
        original: "http://lorempixel.com/1000/600/nature/1/",
        thumbnail: "http://lorempixel.com/250/150/nature/1/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/2/",
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/3/",
        thumbnail: "http://lorempixel.com/250/150/nature/3/"
      },
      {
        original: "",
        thumbnail: ""
      }
    ];

    return <ImageGallery items={images} />;
  }
}

ReactDOM.render(<App />, document.getElementById("carousel-container"));
