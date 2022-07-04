import { connect } from "react-redux";

import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/messages-reducer';

import Friends from './friends';


let mapStateToProps = (state) => {
    console.log('map state' + state);
    return {
        friendsPage: state.friendsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewMessageBody: () => {
        //     dispatch(sendMessageCreator())
        // },
        // sendMessage: (body) => {
        //     dispatch(updateNewMessageBodyCreator(body))
        // }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)


export default FriendsContainer;