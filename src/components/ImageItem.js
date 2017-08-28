import React from 'react';

const imageItem = ({name, url}) => (
            <div className="col s6 m3">
                <div className="card">
                    <div className="card-image">
                        <img src={url} alt={name} />
                    </div>
                    <div className="card-content">
                        <span className="card-title">{name}</span>
                    </div>
                </div>
            </div>
);

export default imageItem;