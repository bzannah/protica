import React from 'react';

const ProjectDetails = (props) => {
    let id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta libero rem est eaque earum minima sunt unde, esse quam suscipit eveniet explicabo quidem delectus in dicta aut dolor. Necessitatibus.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <p>Posted by Spytro</p>
                    <p className="grey-text">3rd September, 3am</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
