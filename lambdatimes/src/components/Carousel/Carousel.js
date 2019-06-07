import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselData: [],
      currentImageUrl: '',
      currentIndex: 0
    }
  }
  componentDidMount(){
    this.setState({
      carouselData: carouselData
    })
    this.autoSlideCarousel();    
  }

  autoSlideCarousel(){
    setInterval(() => {
      this.setState({
        currentIndex: (this.state.currentIndex + 1) % this.state.carouselData.length
      })
    }, 5000)
  }

  leftClick = () => {
    this.state.currentIndex === 0
    ?
      this.setState({
        currentIndex: this.state.carouselData.length - 1
      })
    :
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
  }

  rightClick = () => {
    this.state.currentIndex < this.state.carouselData.length - 1
    ?
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    :
      this.setState({
        currentIndex: 0
      })
  }

  selectedImage = () => {
    let imgUrl = this.state.carouselData[this.state.currentIndex];
    return <img src={imgUrl} alt="Carousel" style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {
          this.selectedImage()
        }
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}