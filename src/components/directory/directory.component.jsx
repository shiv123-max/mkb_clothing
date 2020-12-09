import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'sweaters',
                  imageUrl: 'https://i.ibb.co/SvGdhs3/markus-winkler-PQm-XUxmf-R44-unsplash-1.jpg',
                  id: 1,
                  linkUrl: 'shop/sweaters'
                },
                {
                  title: 'shoes',
                  imageUrl: 'https://i.ibb.co/g3MVkd5/joseph-barrientos-4q-Sb-FWh-HKs-unsplash-1.jpg',
                  id: 2,
                  linkUrl: 'shop/shoes'
                },
                {
                  title: 'shirts',
                  imageUrl: 'https://i.ibb.co/XC32Krc/waldemar-brandt-Db4d6-MRIXJc-unsplash-1.jpg',
                  id: 3,
                  linkUrl: 'shop/shirts'
                },
                {
                  title: 'sarees',
                  imageUrl: 'https://i.ibb.co/K062xhR/white-with-pink-wedding-silk-saree-9ka4118-arrs-silks-14462764974133.jpg',
                  id: 4,
                  linkUrl: 'shop/sarees'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/jD3MhNG/fabio-scaletta-c-YSRnc-Vx-E44-unsplash.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/sbkjsXk/gemma-chua-tran-j-NVg-Cp-Q0-Lh-Q-unsplash.jpg',
                  size: 'large',
                  id: 6,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'children',
                  imageUrl: 'https://i.ibb.co/kGLmngS/robert-collins-l-P-Fb-Bk-Mn1c-unsplash.jpg',
                  size: 'large',
                  id: 7,
                  linkUrl: 'shop/children'
                }
              ]
        }
    }

    render() {
       return (
        <div className= 'directory-menu'>
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
              <MenuItem key={id} {...otherSectionProps} />
          ))
          } 
        </div>
       )
    }

}

export default Directory