import _ from 'lodash';


export default function(node, attributes){
  if (!node) return;
  for ( let attr in attributes){
    node.setAttribute(_.kebabCase(attr), attributes[attr]);
  }
  return node;
}