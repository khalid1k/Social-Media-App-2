import {gql} from "@apollo/client";
export const CREATE_NEW_USER=gql`
mutation createNewUser($userNew:NewUserInput!){
    signUp(userNew: $userNew) {
      _id
      name
    }
  
  }
`;
export const CREATE_NEW_POST=gql`
mutation CreatNewPost($postNew:NewPostInput!){
    createNewPost(postNew:$postNew){
        _id
        title
    }
}
`;
export const CREATE_NEW_COMMENT=gql`
mutation CreateNewComment ($commentNew: NewCommentInput!){
    createNewComment(commentNew:$commentNew){
        _id
        
    }
}
`;