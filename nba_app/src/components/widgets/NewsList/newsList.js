import React from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { Link } from 'react-router-dom';
import styles from './newsList.css';
import ActionButton from '../Button/actionButton';
import CardInfo from '../CardInfo/cardInfo';
import { fbTeams, fbArticles, snapShotToObject } from '../../../firebase';

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
      fbTeams.once('value')
        .then((snapshot) => {
          const teams = snapShotToObject(snapshot);
          this.setState({
            teams: teams
          });
        });
    }

    // Get Articles
    fbArticles
      .orderByChild('id')
      .startAt(start)
      .endAt(end)
      .once('value')
      .then((snapshot) => {
        const articles = snapShotToObject(snapshot);
        this.setState({
          items: [...this.state.items, ...articles],
          start: end,
          end: this.state.end + this.state.amount
        });
      });
  }

  renderNews(type) {
    let template = null;
    switch(type) {
      case 'card':
        template = this.state.items.map((item, index) => {
          return (
            <div
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
            </div>
          )
        });
        break;

      case 'cardImage':
        template = this.state.items.map((item, index) => {
          return (
            <Link to={`/articles/${item.id}`} key={index}>
              <div className={styles.videoListItem_wrapper}>
                <div className={styles.left}
                  style={{
                    background: `url(/images/articles/${item.image})`
                  }}
                >
                  <div></div>
                </div>
                <div className={styles.right}>
                  <CardInfo teams={this.state.teams} team={item.team} date={item.date} un={true} />
                  <h2>{item.title}</h2>
                </div>
              </div>
            </Link>
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
        {this.renderNews(this.props.type)}
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