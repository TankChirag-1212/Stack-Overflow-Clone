import React from 'react'
import './UserProfile.css';

const ProfileBio = ({currentProfile}) => {
    return (
        <div>
            <div>
                {
                    currentProfile?.tags.length != 0 ? (
                        <>
                            <h4>Tags Watched</h4>
                            <div className='profile-tags'>
                                {
                                    currentProfile?.tags.map((tag) => (
                                        <p key={tag}> {tag} </p>
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <p>0 tags watched</p>
                    )
                }
            </div>
            <div>
                {
                    currentProfile?.about ? (
                        <>
                            <h4>About</h4>
                            <p>{currentProfile?.about}</p>
                        </>
                    ) : (
                        <p>No Bio found</p>
                    )
                }
            </div>
        </div>
    )
}

export default ProfileBio