import { BookInfo } from '../../intefaces/bookInfo';

const BookDetails = (props: {book: BookInfo, onCloseBook: any}) => {
    const isHasAuthors: boolean = props.book.volumeInfo.authors ? true : false;
    const isHasDescription: boolean = props.book.volumeInfo.description ? true : false;

        return(
            <div className="book__modal">
                <div className="book__details">
                    <button className="book__btn-close" onClick={() => props.onCloseBook()}></button>
                    <h2 className="book__details-title">
                        {props.book.volumeInfo.title}
                    </h2>
                    <div className="book__details-content">
                        <div>
                            <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="" />
                        </div>
                        <div className="book__details-text">
                            {isHasDescription && 
                                <div>
                                    {props.book.volumeInfo.description}
                                </div>
                            }
                            {isHasAuthors &&
                                <div>
                                Authors: {props.book.volumeInfo.authors}
                            </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default BookDetails;