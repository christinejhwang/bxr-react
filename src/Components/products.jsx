import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';

const MobileProducts = styled.div`
`;

const DesktopProducts = styled.h4`
`;

class Products extends Component {
  state = {
    counters: [
      {name: "Blender",   id: 1, value: 0, img: "https://picsum.photos/200"},
      {name: "Mattress",  id: 2, value: 0, img: "https://picsum.photos/200"},
      {name: "iHome",     id: 3, value: 0, img: "https://picsum.photos/200"},
      {name: "SmartTV",   id: 4, value: 0, img: "https://picsum.photos/200"},
    ]
  };
  render () {
    const bookshelfDesktop = (
      <DesktopProducts>
        {this.state.counters.map(item =>
          <Item key={item.id} value={item.value} image={item.img}>
            <h4>{item.name}</h4>
          </Item>)}
      </DesktopProducts>
    );
    const bookshelfMobile = (
      <MobileProducts>
        {this.state.counters.map(item =>
          <Item key={item.id} value={item.value} image={item.img}>
            <h4>{item.name}</h4>
          </Item>)}
      </MobileProducts>
    );
    return(
      <Section title="">
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? bookshelfDesktop : bookshelfMobile)}
        </Media>
      </Section>
    );
  }
};

export default Products;
