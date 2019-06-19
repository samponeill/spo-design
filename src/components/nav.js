import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')       
    .replace(/^-+/, '')         
    .replace(/-+$/, '');            
};

const Nav = () => (
    <nav>
    </nav>    
)

export default Nav


