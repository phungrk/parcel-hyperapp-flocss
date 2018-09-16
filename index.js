import { h, app } from "hyperapp";
const WhatGreat = () => {
  return (
    <ul class="p-rating-list c-form-radio">
      <li class="p-rating-list-item">
        <label onclick={() => actions.setRateGood(1)} >
          <input type="checkbox" value="1" name="ratingGood" />
          <span class="c-form-radio-label">Time</span>
        </label>        
      </li>
      <li class="p-rating-list-item">
        <label onclick={() => actions.setRateGood(2)} >
          <input type="checkbox" value="1" name="ratingGood" />
          <span class="c-form-radio-label">Quality</span>
        </label>    
      </li>
      <li class="p-rating-list-item">
        <label onclick={() => actions.setRateGood(3)} >
          <input type="checkbox" value="1" name="ratingGood" />
          <span class="c-form-radio-label">Performance and Service</span>
        </label>   
      </li>
      <li class="p-rating-list-input">Others
        <textarea type="text" name="other" class="c-form-textarea" ></textarea>
      </li>
    </ul>
  )
}
const WhatWorse = () => {
  return (
    <ul>
      <li>Worse one</li>
      <li>Worse two</li>
      <li>Worse three</li>
    </ul>
  )
}
const WhatBetter = () => {
  return (
    <ul>
      <li>Better one</li>
      <li>Better two</li>
      <li>Better three</li>
    </ul>
  )
}
//
const What = ({rate}) => {
  let c;
  switch (rate) {
    case 1: 
      return WhatWorse;
    case 2: 
      return WhatBetter;
    case 3: 
      return WhatGreat;
    default: 
      return '';
  }
}
//
const state = {
  rate : 0,
  rateGood: 0
} 
//
const actions = {
  setRate: value => state => ({ rate: state.rate = value }),
  setRateGood: value => state => ({ rateGood: state.rateGood = value }),
}
//
const view = (state, actions) => (
  <main class="l-rating">
    <h2>Rate: {state.rate}</h2>
    <div>
      <label onclick={() => actions.setRate(1)} >
        <input type="radio" value="1" name="rating" />1
      </label>
      <label onclick={() => actions.setRate(2)} >
        <input type="radio" value="2" name="rating" />2
      </label>
      <label onclick={() => actions.setRate(3)} >
        <input type="radio" value="3" name="rating" />3
      </label>
    </div>
    <What rate={state.rate}/>
  </main>
)

export const main = app(state, actions, view, document.body)