import React from 'react';
import InfoCardDetail from '../InfoCardDetail/InfoCardDetail';
import spray from '../../../../images/spray.png'
import bucket from '../../../../images/bucket.png'
import bucketGlabs from '../../../../images/bucketGlabs.png'

const InfoCard = () => {
    const infoData = [
        {
            title: 'House Cleaning',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quis illum, dicta qui in sunt.',
            icon: bucket
        },
        {
            title: 'Office Cleaning',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quis illum, dicta qui in sunt.',
            icon: spray
        },
        {
            title: 'Indoor Cleaning',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quis illum, dicta qui in sunt.',
            icon: bucketGlabs
        }
    ]
    return (
        <div className="container">
            <div className="row">
                {
                    infoData.map(info => <InfoCardDetail info={info}></InfoCardDetail>)
                }
            </div>
        </div>
    );
};

export default InfoCard;