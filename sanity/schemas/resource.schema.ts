const resourceSchema = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('A title is required.'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
      validation: (Rule: any) => Rule.required().error('A download link is required.'),
    },
    {
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
      validation: (Rule: any) =>
        Rule.min(0).error('Views cannot be negative.'),
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required().error('A poster image is required.'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['ALL', 'Project', 'Experience', 'About', 'Certificates'],
      },
      validation: (Rule: any) => Rule.required().error('A category is required.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) =>
        Rule.max(500).warning('Descriptions should be concise.'),
    },
  ],
};

export default resourceSchema;
