
import { Component } from 'react';
// import productsUrl from '../../functions/global.jsx';
import {styles} from './styles';
import { css } from 'aphrodite';
import './styles.css'
import {widthSelectFunct} from '../../functions/widthSelect';
import {widthSelectFunct2} from '../../functions/widthSelect2';
import {descriptionSelect} from '../../functions/descriptionSelect';
import {Modals} from '../modals/modals';




class BodyRender extends Component {
  constructor(props) {
    super(props);
    this.sumMax = this.sumMax.bind(this);
    this.sumMin = this.sumMin.bind(this);
    this.state = {
      
      bodyItem: [],
      num: 0,
    
      checkboxes: {
        red: false,
        black: false,
        selected: null,
      },
      checkboxes2: {
        seven: false,
        sevenDot: false,
        eight: false,
        eightDot: false,
        nine: false,
        nineDot: false,
        ten: false,
        tenDot: false,
        eleven: false,
        elevenDot: false,
        selected: null,
      }
    };
  }

  sumMax() {
    this.setState({ num: this.state.num + 1 });
  };

  sumMin() {
    if (this.state.num > 0) {
    this.setState({ num: this.state.num - 1 });
    }
  };

  componentDidMount() {
    fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js")
      .then(response => response.json())
      .then(data => this.setState({ bodyItem: data }));
  }

  onCheck(name, val) {
    const checkboxes = Object.assign({},this.state.checkboxes, {});
    for (let key in checkboxes) {
      checkboxes[key] = false;
    }
    checkboxes[name] = true;
    checkboxes.selected = val;
    this.setState({ checkboxes });
  }
  onCheck2(name, val) {
    const checkboxes2 = Object.assign({},this.state.checkboxes2, {});
    for (let key in checkboxes2) {
      checkboxes2[key] = false;
    }
    checkboxes2[name] = true;
    checkboxes2.selected = val;
    this.setState({ checkboxes2 });
  }
  render() {

    const images = this.state.bodyItem.images;
    const TitleBody = this.state.bodyItem.title;
    const SubtitleBodyPrice = this.state.bodyItem.price;
    const SubtitleBodyComparePrice = this.state.bodyItem.compare_at_price;
    const colorSelectName = this.state.bodyItem.options;
    const DescriptionBody = this.state.bodyItem.description;
    const widthSelectNumber = this.state.bodyItem.options;

    let formatterUSA = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });

    const colorSelect = [];
    // eslint-disable-next-line
    colorSelectName?.map((color) => {
      colorSelect.push(
        // eslint-disable-next-line
        <>{color.name}</>
      );
    })
    const items = [];
    // eslint-disable-next-line 
      images?.map((image, index) => {
        items.push(
          // eslint-disable-next-line
              <img  key={index} src={image} className={this.props.className}/>
        );
      })  
    return (
      <div className={css(styles.container)}>
        
        <div >
          <h3 className={css(styles.subtitle)}>
            by Nike x ALYX
          </h3>
        </div>
        <div className={css(styles.title)}>
          {TitleBody}
        </div>
        
        <div className={css(styles.containerPrice)}>
          <div>
            <p className={css(styles.price)}>{formatterUSA.format(SubtitleBodyPrice / 100)} </p>
          </div>
          <div>
            <p className={css(styles.priceCompare)}>{formatterUSA.format(SubtitleBodyComparePrice / 100)}</p>
          </div>
        </div>
       
        <div>
          <div className={css(styles.containerPrice)}>
            <div>
              <p>{colorSelect[0]}</p>
            </div>
            <div className="round">
              <input 
              type="checkbox" 
              id="checkbox" 
              value={widthSelectFunct[0]} 
              checked={this.state.checkboxes.red}
              onChange={() => this.onCheck('red', widthSelectFunct(widthSelectNumber)[0])}
              />
              <label className='size' htmlFor="checkbox" />
            </div>
           
            <div className="r">
              <input 
              type="checkbox" 
              id="checkbox2" 
              value={widthSelectFunct[1]}
              checked={this.state.checkboxes.black}
              onChange={() => this.onCheck('black', widthSelectFunct(widthSelectNumber)[1])}
              />
              <label className='size' htmlFor="checkbox2"></label>
            </div>
          </div>
        </div>
     
        <div className={css(styles.containerPrice)}>
        <div className={css(styles.containerSize)}>
          <div>
              <p>{colorSelect[1]}</p>
            </div>
            <li>
              <div className="width">
                <input 
                type="checkbox" 
                id="checkbox3"
                value={widthSelectFunct2(widthSelectNumber)[0]}
                checked={this.state.checkboxes2.seven}
                onChange={() => this.onCheck2('seven', widthSelectFunct2(widthSelectNumber)[0])}
                />
                <label className='size' htmlFor="checkbox3">{widthSelectFunct2(widthSelectNumber)[0]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox4"
                value={widthSelectFunct2(widthSelectNumber)[1]}
                checked={this.state.checkboxes2.sevenDot}
                onChange={() => this.onCheck2('sevenDot', widthSelectFunct2(widthSelectNumber)[1])}
                />
                <label className='size' htmlFor="checkbox4">{widthSelectFunct2(widthSelectNumber)[1]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox5"
                value={widthSelectFunct2(widthSelectNumber)[2]}
                checked={this.state.checkboxes2.eight}
                onChange={() => this.onCheck2('eight', widthSelectFunct2(widthSelectNumber)[2])}
                />
                <label className='size' htmlFor="checkbox5">{widthSelectFunct2(widthSelectNumber)[2]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox6"
                value={widthSelectFunct2(widthSelectNumber)[3]}
                checked={this.state.checkboxes2.eightDot}
                onChange={() => this.onCheck2('eightDot', widthSelectFunct2(widthSelectNumber)[3])}
                />
                <label className='size' htmlFor="checkbox6">{widthSelectFunct2(widthSelectNumber)[3]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox7"
                value={widthSelectFunct2(widthSelectNumber)[4]}
                checked={this.state.checkboxes2.nine}
                onChange={() => this.onCheck2('nine', widthSelectFunct2(widthSelectNumber)[4])}
                />
                <label className='size' htmlFor="checkbox7">{widthSelectFunct2(widthSelectNumber)[4]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox8"
                value={widthSelectFunct2(widthSelectNumber)[5]}
                checked={this.state.checkboxes2.nineDot}
                onChange={() => this.onCheck2('nineDot', widthSelectFunct2(widthSelectNumber)[5])}
                />
                <label className='size' htmlFor="checkbox8">{widthSelectFunct2(widthSelectNumber)[5]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox9"
                value={widthSelectFunct2(widthSelectNumber)[6]}
                checked={this.state.checkboxes2.ten}
                onChange={() => this.onCheck2('ten', widthSelectFunct2(widthSelectNumber)[6])}
                />
                <label className='size' htmlFor="checkbox9">{widthSelectFunct2(widthSelectNumber)[6]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox10"
                value={widthSelectFunct2(widthSelectNumber)[7]}
                checked={this.state.checkboxes2.tenDot}
                onChange={() => this.onCheck2('tenDot', widthSelectFunct2(widthSelectNumber)[7])}
                />
                <label className='size' htmlFor="checkbox10">{widthSelectFunct2(widthSelectNumber)[7]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox11"
                value={widthSelectFunct2(widthSelectNumber)[8]}
                checked={this.state.checkboxes2.eleven}
                onChange={() => this.onCheck2('eleven', widthSelectFunct2(widthSelectNumber)[8])}
                />
                <label className='size' htmlFor="checkbox11">{widthSelectFunct2(widthSelectNumber)[8]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox12"
                value={widthSelectFunct2(widthSelectNumber)[9]}
                checked={this.state.checkboxes2.elevenDot}
                onChange={() => this.onCheck2('elevenDot', widthSelectFunct2(widthSelectNumber)[9])}
                />
                <label className='size' htmlFor="checkbox12">{widthSelectFunct2(widthSelectNumber)[9]}</label>
              </div>
              {/* <label>{this.state.checkboxes2.selected}</label> */}
            </li>
          </div>
        </div>
        
        <div className={css(styles.containerPrice)}>
          <div className={css(styles.containerSize)}>
            <li>
            <div className="num-block skin">
              <div className="num-in">
                <button className="minus dis" onClick={() => this.sumMin()}>-</button>
                <input type="text" className="in-num" value={this.state.num} readOnly />
                <button className="plus" onClick={() => this.sumMax()}>+</button>
              </div>
            </div>
            
            </li>
          </div>
          <li>
          <div className={css(styles.containerPrice2)}>
            <p className={css(styles.price2)}>Total Price: {formatterUSA.format(SubtitleBodyPrice / 100 * this.state.num)} </p>
          </div>
          </li>
        </div>
        
        <Modals>
          <div className={css(styles.containerModal)}>
            <div className={css(styles.containerModal2)}>
            <div >
          <h3 className={css(styles.subtitle)}>
            by Nike x ALYX
          </h3>
        </div>
        <div className={css(styles.title)}>
          {TitleBody}
        </div>
            <label>Color: {this.state.checkboxes.selected}</label>
            <label>Amount: {this.state.num}</label>
            <label>size: {this.state.checkboxes2.selected}</label>
            <label>Total Price: {formatterUSA.format(SubtitleBodyPrice / 100 * this.state.num)} </label>  
            {items[0]}
            <button type="button" className={css(styles.button2)} onClick={() => this.onClick()}>Add</button>
            </div>
          </div>
        </Modals>
      
        <div className={css(styles.containerPrice)}>
          <div className={css(styles.containerSize)}>
            <p>{descriptionSelect(DescriptionBody)}</p>
          </div>
        </div>
       
      </div >
    );
  }
}


export default BodyRender;
