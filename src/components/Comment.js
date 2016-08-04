import React, { PropTypes } from 'react';


const Comment = (props) => {

  return (
    <div className="card col-md-4">
      <div className="inner">
        <div className="comment__name">
          Name: {props.name}
        </div>

        <div className="comment__email">
          Email: {props.email}
        </div>

        <div className="comment__content">
          Address: {props.comment}
        </div>
       <div className="comment__lat">
          Lat: {props.lat}
        </div>
        <div className="comment__lng">
          Lng: {props.lng}
        </div>
        <div className="comment__created-at">
          at {new Date(props.created_at).toLocaleString()}
        </div>
        <span>
                    <button className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button lassName="btn btn-danger glyphicon glyphicon-trash"/>
                </span>



  
      </div>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  comment: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  created_at: PropTypes.number,
};

export default Comment;
