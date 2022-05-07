import React from 'react'
import "../App.css"
import styles from "../Styles/categories.module.css"
export default function Categories() {
    return (
                <div className='col-2'>
                    <div>
                        <div className={styles.category_text}>DANH MỤC</div>
                        <ul className={styles.category}>
                            <li className={styles.category_item}>Áo thun</li>
                            <li className={styles.category_item}>Ba lô</li>
                        </ul>
                    </div>
                </div>
    )
}
