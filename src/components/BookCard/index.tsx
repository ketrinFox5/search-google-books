import { BookInfo } from '../../intefaces/bookInfo';

const BookCard = (props: {bookInfo: BookInfo, onClickBook: any}) => {

    // const onClickBook = () => {
    //     props.onClick(props.bookInfo.id);
    // }

    if (props.bookInfo) {
        return(
            <div className="book" key={props.bookInfo.id}>
                {props.bookInfo.volumeInfo.imageLinks &&
                    <div className="book__img">
                    <img src={props.bookInfo.volumeInfo.imageLinks.smallThumbnail} alt="" />
                </div>
                }
                <div className="book__title">
                    {props.bookInfo.volumeInfo.title}
                </div>
                <button className="book__btn" onClick={()=> props.onClickBook(props.bookInfo.id)}>
                    Know more
                </button>
            </div>
        )
    }
}

export default BookCard;
