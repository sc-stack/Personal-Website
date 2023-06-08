import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://github.com/sc-stack" target="_blank">
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href="https://github.com/sc-stack" target="_blank">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://www.youtube.com/channel/UCZ4Hzi1jn_hGocDj2p-qVXQ" target="_blank">
                    <AiFillYoutube />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
