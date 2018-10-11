import React from 'react';

export const LoadingSpinner = function () {
    return (
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-forward text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
}