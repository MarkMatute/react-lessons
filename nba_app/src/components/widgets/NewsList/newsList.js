import React from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../config';
import styles from './newsList.css';
import ActionButton from '../Button/actionButton';
import CardInfo from '../CardInfo/cardInfo';

class NewsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      items: [],
      start: this.props.start,
      end: this.props.start + this.props.amount,
      amount: this.props.amount
    };
  }

  componentWillMount() {
    const { start, end} = this.state;
    this.getNewsData(start, end);
  }

  loadMore() {
    this.getNewsData(this.state.end, this.state.end + this.state.amount);
  }

  getNewsData(start, end) {
    // Get News
    if (this.state.teams && this.state.teams.length < 1) {
      axios.get(`${API_URL}/teams`)
        .then((result) => {
          this.setState({
            teams: result.data
          });
        });
    }

    // Get Articles
    axios.get(`${API_URL}/articles?_start=${start}&_end=${end}`)
      .then((result) => {
        this.setState({
          items: [
            ...this.state.items,
            ...result.data
          ]
        })
      });
  }

  renderNews(type) {
    let template = null;
    switch(type) {
      case 'card':
        template = this.state.items.map((item, index) => {
          return (
            <CSSTransition
              classNames={{
                enter: styles.newslist_wrapper,
                enterActive: styles.newslist_wrapper_enter
              }}
              timeout={500}
              key={index}
            >
              <div>
                <div className={styles.newslist_item}>
                  <Link to={`/articles/${item.id}`}>
                    <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
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
    console.log(this.state.teams);


    return (
      <div>
        <TransitionGroup>
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <ActionButton 
          type="loadmore"
          loadMore={()=>this.loadMore()}
          cta="Load More News"
        />
      </div>
    )
  }
}

export default NewsList;