import React from "react";


export default function CommentsForm(props) {
    return (
        <section className="comments-section">
            <h2 className="section-title">💬 Comments</h2>

            <div className="comment-form">
                <h3>Add Comment</h3>
                <form onSubmit="addComment(event)">
                    <div className="form-group">
                        <label htmlFor="comment-name">Name:</label>
                        <input type="text" id="comment-name def-input-style " className="form-input" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment-email">Email:</label>
                        <input type="email" id="comment-email def-input-style" className="form-input" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment-text">Comment:</label>
                        <textarea id="comment-text" className="form-input form-textarea def-input-style" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Post Comment</button>
                </form>
            </div>

            <div className="comments-list" id="comments-list">
            </div>
        </section>
    )
}