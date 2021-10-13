import React from "react";
import "../styles/Gallery.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current_position: 0 };
    this.images = props["images"];
  }

  move_right = () => {
    if (this.state.current_position === this.images.length - 1) {
      this.setState({ current_position: 0 });
    } else {
      this.setState({ current_position: this.state.current_position + 1 });
    }
  };

  move_left = () => {
    if (this.state.current_position === 0) {
      this.setState({current_position : this.images.length - 1});
    } else {
      this.setState({current_position: this.state.current_position - 1});
    }
  };

  render(props) {
    let current_image = this.images[this.state.current_position];
    return (
      <div className="gallery">
        <div className="arrow-left arrow" onClick={this.move_left}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-left"
            class="svg-inline--fa fa-angle-left"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
            ></path>
          </svg>
        </div>
        <img
          src={current_image}
          // src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          alt="apartment view"
        />
        <div className="arrow-right arrow" onClick={this.move_right}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-right"
            class="svg-inline--fa fa-angle-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default Gallery;
