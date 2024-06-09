import { Component } from 'react'
import styles from './shopitem.module.css'

export class ShopItemClass extends Component {
  render() {
    const {brand, title, description,descriptionFull, price, currency} = this.props.item;
    return (
      <div className={styles['main-content']}>
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className={styles['description']}>{descriptionFull}</div>
        <div className={styles['highlight-window mobile']}><div className={styles['highlight-overlay']}></div></div>
        <div className={styles['divider']}></div>
        <div className={styles['purchase-info']}>
        <div className={styles['price']}>{currency}{price}.00</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
  )}
  }

