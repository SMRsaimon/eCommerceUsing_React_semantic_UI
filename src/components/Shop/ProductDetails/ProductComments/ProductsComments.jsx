import React, { useContext } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import { globalContext } from '../../../../App';

const ProductsComments = ({comments}) => {
    const {state}=useContext(globalContext)
   
    const {comment,id,rating,u_id}=comments
    const user=state.customers.users.find(ur=>ur.u_id==u_id)
    console.log(user)


    return (
        <>
        <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
     
    </Comment>
         <Comment.Content>
        <Comment.Author>{user?.name}</Comment.Author>
        <Comment.Metadata>
          {/* <div>1 day ago</div> */}
        </Comment.Metadata>
        <Comment.Text>
          <p>
            {comment}
          </p>
         
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
          
        </>
    );
};

export default ProductsComments;