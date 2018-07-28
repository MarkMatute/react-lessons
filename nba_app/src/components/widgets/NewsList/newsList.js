import React from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../config';

class NewsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      start: this.props.start,
      end: this.props.start + this.props.amount,
      amount: this.props.amount
    };
  }

  componentWillMount() {
    const { start, end} = this.state;
    axios.get(`${API_URL}/articles?_start${start}&_end=${end}`)
      .then((result) => {
        this.setState({
          items: [
            ...this.state.items,
            ...result.data
          ]
        })
      });
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default NewsList;