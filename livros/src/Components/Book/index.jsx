import React from 'react'

import styles from "./Book.module.sass"

function Book({ book }) {

    const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
    const amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;

    return (
        <>
              {thumbnail!= undefined && amount !=undefined?(
                <div className={styles.book}>
                    <div className={styles.book_title}>
                        <h2>{book.volumeInfo.title}</h2>
                    </div>
                    <div className={styles.book_thumb}>
                        <a href={book.volumeInfo.canonicalVolumeLink} target="_blank">
                            <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
                        </a>
                        

                    </div>
                    <div className={styles.book_description}>
                        <p>
                            {book.volumeInfo.description}
                        </p>
                    </div>
                </div>):(
                    <></>
                )

              }
        

        </>

    )
}

export default Book
