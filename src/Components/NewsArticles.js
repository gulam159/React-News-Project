const NewsArticles = (props) => {

    let { title, description, imageUrl, newsUrl } = props;
    return (
        <>
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-secondary">Read Full Article</a>
                </div>
            </div>
        </>
    )
}

export default NewsArticles
