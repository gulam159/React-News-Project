import React, { useState, useEffect } from 'react'
import NewsArticles from './NewsArticles'

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState('');

    const [pageNumber, setPageNumber] = useState(1)

    const updateNews = async () => {
        // let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`
        let url = `https://saurav.tech/NewsAPI/everything/bbc-news.json`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        // console.log(parsedData);
        setLoading('Loading Latest News');
    }

    useEffect(() => {
        updateNews();
    }, [])

    const handlePrev = () => {
        if (pageNumber === 1) {
            return
        } else {
            setPageNumber(pageNumber - 1);
        }
    }

    const handleNext = () => {
        if(pageNumber*8>=articles.length){
            return;
        }
        setPageNumber(pageNumber + 1)
    }

    return (
        <>
            <div className="container my-3">
                <h2 className='text-center my-4 mb-4'>Top Headlines of the Day</h2>
                <div className="row my-3" >
                    {loading ? articles.map((element, index) => {
                        
                        return (
                            index>=(pageNumber-1)*9 && index<pageNumber*9?    
                            <div className="col-md-4" key={element.url}>
                                <NewsArticles title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>:null
                        )
                    }): <h6 className='text-center'>Your Latest News is Loading...</h6>}

                    <div className='d-flex justify-content-between my-4'>
                        <button disabled={pageNumber<=1} type="button" className="btn btn-primary" onClick={handlePrev}>Previous</button>
                        <button type="button" disabled className="btn btn-outline-secondary">Page {pageNumber} </button>
                        <button disabled={pageNumber*9>=articles.length} type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default News