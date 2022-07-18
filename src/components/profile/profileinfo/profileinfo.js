import React from 'react';
import Preloader from '../../../components/common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    else {
        return (
            <div>
                <div>
                    <img src="https://pibig.info/uploads/posts/2021-06/1623482443_3-pibig_info-p-oberzee-ozero-priroda-krasivo-foto-3.jpg" />
                </div>
                <div>
                    <img src={props.profile.photos.large} alt="" />
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;