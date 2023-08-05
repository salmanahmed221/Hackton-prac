import { defineField, defineType } from 'sanity';

export const products = defineType({
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Product Image',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
    }),
    defineField({
      name: 'genderCategory',
      title: 'Product Gender Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    }),
  ],
});
