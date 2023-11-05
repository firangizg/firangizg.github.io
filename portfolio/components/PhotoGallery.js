import React from 'react';

const PhotoGallery = () => {
    return (
        <div className="blog-post">
            <h1 className="blog-post__title">My Blog Post Title</h1>
            <p className="blog-post__date">Published on January 1, 2022</p>
            <img className="blog-post__image" src="https://example.com/image.jpg" alt="Blog post image" />
            <p className="blog-post__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu bibendum bibendum, velit sapien bibendum ipsum, vel bibendum sapien sapien vel sapien. Sed euismod, urna eu bibendum bibendum, velit sapien bibendum ipsum, vel bibendum sapien sapien vel sapien.</p>
        </div>
    );
};

export default PhotoGallery;