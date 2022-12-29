import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
//schemas
import headerBanner from './headerBanner';
import categories from './categories';
import promo from './promo';
import product from './product';
import footerBanner from './footerBanner'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    headerBanner,
    categories,
    promo,
    product,
    footerBanner
  ]),
})
