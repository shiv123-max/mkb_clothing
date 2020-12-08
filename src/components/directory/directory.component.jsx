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
                  imageUrl: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80',
                  id: 1,
                  linkUrl: 'shop/sweaters'
                },
                {
                  title: 'shoes',
                  imageUrl: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
                  id: 2,
                  linkUrl: 'shop/shoes'
                },
                {
                  title: 'shirts',
                  imageUrl: 'https://images.unsplash.com/photo-1549037173-e3b717902c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
                  id: 3,
                  linkUrl: 'shop/shirts'
                },
                {
                  title: 'sarees',
                  imageUrl: 'https://static.peachmode.com/media/images/product/48354/small/1586502007_1_SSTSU-5034-BLUE-MAROON-Sky_Blue-Maroon_Half__Half_Art_Silk_Saree-PEACHMODE.jpg',
                  id: 4,
                  linkUrl: 'shop/sarees'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
                  size: 'large',
                  id: 6,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'children',
                  imageUrl: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
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