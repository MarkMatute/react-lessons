import React from 'react';
import SlickSlider from 'react-slick';
import styles from './newsSlider.css'
import { Link } from 'react-router-dom';

class SliderTemplates extends React.Component {
  
  settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    ...this.props.settings
  }

  generateTemplate() {
    let template = null;
    switch(this.props.type) {
      case 'featured': 
        template = this.props.data.map((news, index) => {
          return (
            <div key={index}>
              <div className={styles.featured_item}>
                <div className={styles.featured_image}
                     style={{
                      background: `url(../images/articles/${news.image})`
                     }}></div>
                <Link to={`/articles/${news.id}`} >
                  <div className={styles.featured_caption}>
                     { news.title }
                  </div>
                </Link>
              </div> 
            </div>
          )
        });
        break;
      default:
        template = null;
          break;
    }
    return template;
  }

  render() {
    return (
      <div>
        <SlickSlider {...this.settings}>
          {this.generateTemplate()}
        </SlickSlider>
      </div>
    )
  }
}

export default SliderTemplates;