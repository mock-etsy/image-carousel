import React from "react";
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ApiOutput from "../database/ApiOutput";

import ImageGallery from "react-image-gallery";

// const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';
// const PREFIX_URL = 'https://i.etsystatic.com/';
// const PREFIX_URL = ApiOutput[0]["results"][0]["url_170x135"];
// const PREFIX_URL_TWO = ApiOutput[0]["results"][0]["url_fullxfull"];
// create an array of objects which contain image data (thumbnail and fullsize)
let imagesArray = [];
// let imageObject = { thumbnail: "", original: "" };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // showIndex: false,
      showBullets: true,
      infinite: true,
      newInput: false,
      listID: 471994052
      // showThumbnails: true,
      // showFullscreenButton: true,
      // showGalleryFullscreenButton: true,
      // showPlayButton: false,
      // showGalleryPlayButton: false,
      // showNav: true,
      // isRTL: false,
      // slideDuration: 450,
      // slideInterval: 99999999,
      // slideOnThumbnailOver: false,
      // thumbnailPosition: "bottom",
      // showVideo: {},
      // newId: false
      // newImagesArray: []
    };

    // broadcast channel:
    this.reviewChannel = new BroadcastChannel("regretfully");

    this.retrieveImages = this.retrieveImages.bind(this);

    // this.images = [
    //   {
    //     thumbnail: `${PREFIX_URL}`,
    //     // original: `${PREFIX_URL}4v.jpg`,
    //     original: `${PREFIX_URL_TWO}`

    //     // embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
    //     // description: 'Render custom slides within the gallery',
    //     // renderItem: this._renderVideo.bind(this)
    //   },
    //   {
    //     original: `${PREFIX_URL}image_set_default.jpg`,
    //     thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
    //     imageSet: [
    //       {
    //         srcSet: `${PREFIX_URL}image_set_cropped.jpg`,
    //         media: "(max-width: 1280px)"
    //       },
    //       {
    //         srcSet: `${PREFIX_URL}image_set_default.jpg`,
    //         media: "(min-width: 1280px)"
    //       }
    //     ]
    //   },
    //   {
    //     original: `${PREFIX_URL}1.jpg`,
    //     thumbnail: `${PREFIX_URL}1t.jpg`,
    //     originalClass: "featured-slide",
    //     thumbnailClass: "featured-thumb"
    //     // description: 'Custom class for slides & thumbnails'
    //   }
    // ].concat(this._getStaticImages());
    // this.retrieveImages(471994052);
    this.images = imagesArray;
    // console.log(imagesArray)
    // imagesArray = [];
    // setTimeout(() => {imagesArray = []}, 50);
    // this.images = this.state.newImagesArray;
    
  }

  retrieveImages(id) {
    imagesArray.length = 0;
    // imagesArray = [];
    console.log('imagesArray: ', imagesArray);
    // imagesArray = [{thumbnail: "", original: ""}];
    console.log("Retrieving images at id: ", id);
    // loop through ApiOutput to find listingID
    for (let i = 0; i < ApiOutput.length; i++) {
      if (ApiOutput[i]["results"][0]["listing_id"] === id) {
        // loop through correct listingID to create image array
        for (let j = 0; j < ApiOutput[i]["results"].length; j++) {
            let imageObject = {};
          // iterate through each image object
          for (let key in ApiOutput[i]["results"][j]) {
            if (key === "url_170x135") {
              imageObject["thumbnail"] = /*{ thumbnail: */ApiOutput[i]["results"][j][key];
            }
            if (key === "url_fullxfull") {
              imageObject["original"] = /*{ original: */ApiOutput[i]["results"][j][key];
            }
          }
          imagesArray.push(imageObject);
        }
      }
    }

    // this.setState({newImagesArray: imagesArray.slice(0)});
    // this.images = imagesArray;
  }

  componentDidMount() {
    this.retrieveImages(this.state.listID);  
    // this.setState({newImagesArray: 471994052})
  }

  // componentDidUpdate(prevProps, prevState) {
    // if (
    //   this.state.slideInterval !== prevState.slideInterval ||
    //   this.state.slideDuration !== prevState.slideDuration
    // ) {
    //   // refresh setInterval
    //   this._imageGallery.pause();
    //   // this._imageGallery.play();
    // }
    // imagesArray = [];
  // }

  // _onImageClick(event) {
  //   console.debug(
  //     "clicked on image",
  //     event.target,
  //     "at index",
  //     this._imageGallery.getCurrentIndex()
  //   );
  // }

  // _onImageLoad(event) {
  //   console.debug("loaded image", event.target.src);
  // }

  // _onSlide(index) {
  //   this._resetVideo();
  //   console.debug("slid to index", index);
  // }

  // _onPause(index) {
  //   console.debug("paused on index", index);
  // }

  // _onScreenChange(fullScreenElement) {
  //   console.debug("isFullScreen?", !!fullScreenElement);
  // }

  // _onPlay(index) {
  //   console.debug("playing from index", index);
  // }

  // _handleInputChange(state, event) {
  //   this.setState({ [state]: event.target.value });
  // }

  // _handleCheckboxChange(state, event) {
  //   this.setState({ [state]: event.target.checked });
  // }

  // _handleThumbnailPositionChange(event) {
  //   this.setState({ thumbnailPosition: event.target.value });
  // }

  // _getStaticImages() {
  //   let images = [];
  //   for (let i = 2; i < 12; i++) {
  //     images.push({
  //       original: `${PREFIX_URL}${i}.jpg`,
  //       thumbnail: `${PREFIX_URL}${i}t.jpg`
  //     });
  //   }

  //   return images;
  // }

  // _resetVideo() {
  //   this.setState({ showVideo: {} });

  //   if (this.state.showPlayButton) {
  //     this.setState({ showGalleryPlayButton: true });
  //   }

  //   if (this.state.showFullscreenButton) {
  //     this.setState({ showGalleryFullscreenButton: true });
  //   }
  // }

  // _toggleShowVideo(url) {
  //   this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
  //   this.setState({
  //     showVideo: this.state.showVideo
  //   });

  //   if (this.state.showVideo[url]) {
  //     if (this.state.showPlayButton) {
  //       this.setState({ showGalleryPlayButton: false });
  //     }

  //     if (this.state.showFullscreenButton) {
  //       this.setState({ showGalleryFullscreenButton: false });
  //     }
  //   }
  // }

  // _renderVideo(item) {
  //   return (
  //     <div className="image-gallery-image">
  //       {this.state.showVideo[item.embedUrl] ? (
  //         <div className="video-wrapper">
  //           <a
  //             className="close-video"
  //             onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
  //           />
  //           <iframe
  //             width="560"
  //             height="315"
  //             src={item.embedUrl}
  //             frameBorder="0"
  //             allowFullScreen
  //           />
  //         </div>
  //       ) : (
  //         <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
  //           <div className="play-button" />
  //           <img src={item.original} />
  //           {item.description && (
  //             <span
  //               className="image-gallery-description"
  //               style={{ right: "0", left: "initial" }}
  //             >
  //               {item.description}
  //             </span>
  //           )}
  //         </a>
  //       )}
  //     </div>
  //   );
  // }

  render() {
    // Listen for a product listing ID from message bus:
    this.reviewChannel.onmessage = e => {
      // imagesArray = imagesArray.splice(0);
      // imagesArray = [];
      // this.images = [];
      this.retrieveImages(parseInt(e.data));
      console.log("e.data: ", e.data);
      this.setState({listID: e.data})
      // this.setState({newId: false})
      // this.setState({newImagesArray: []})
      this.setState({newInput: !this.state.newInput});
    };

    return (
      <section className="app">
        <ImageGallery
          // ref={i => (this._imageGallery = i)}
          items={this.images}
          // lazyLoad={false}
          // onClick={this._onImageClick.bind(this)}
          // onImageLoad={this._onImageLoad}
          // onSlide={this._onSlide.bind(this)}
          // onPause={this._onPause.bind(this)}
          // onScreenChange={this._onScreenChange.bind(this)}
          // onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          // showFullscreenButton={
          //   this.state.showFullscreenButton &&
          //   this.state.showGalleryFullscreenButton
          // }
          // showPlayButton={
          //   this.state.showPlayButton && this.state.showGalleryPlayButton
          // }
          // showThumbnails={this.state.showThumbnails}
          // showIndex={this.state.showIndex}
          // showNav={this.state.showNav}
          // isRTL={this.state.isRTL}
          // thumbnailPosition={this.state.thumbnailPosition}
          // slideDuration={parseInt(this.state.slideDuration)}
          // slideInterval={parseInt(this.state.slideInterval)}
          // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          // additionalClass="app-image-gallery"
          // newId={this.state.newId}
          // newImagesArray={this.state.newImagesArray}
        />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("carousel-container"));
