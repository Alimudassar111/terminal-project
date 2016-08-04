import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/guestbookActions';
import Comment from './Comment';


class List extends Component {
  static propTypes = {
    comments: PropTypes.array,
    fetchComments: PropTypes.func,
  };

  componentWillMount() {
    this.props.fetchComments();
  }

  render() {
    let result = this.props.comments.map((item, index) => {
      return (
        <Comment key={index}
          name={item.name}
          email={item.email}
          comment={item.comment}
          created_at={item.created_at} 
         
          />
      );
    });

    return (
      <div className="entries, edit__list">
        <h3>{'Total: ' + this.props.comments.length + ' Entries'}</h3>

        <div className="row">
          {result}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.guestbook,
  };
}

export default connect(mapStateToProps, { fetchComments })(List);
