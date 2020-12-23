import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Container } from './styles';

const Comment = ({ comment }) => {
    return (
        <Container>
            <div className="comment-info">
                <h1>{comment.username}</h1>
                <span>{moment(comment.createAt).fromNow()}</span>
            </div>

            <div className="comment-body">
                <p>{comment.body}</p>
            </div>
        </Container>
    );
};

export default Comment;
