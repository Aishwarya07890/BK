const resourcePlaylistSchema = {
  name: 'resourcePlaylist',
  title: 'Resource Playlist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('A playlist title is required.'),
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'resource' }],
        },
      ],
      validation: (Rule: any) =>
        Rule.min(1).error('A playlist must include at least one resource.'),
    },
  ],
};

export default resourcePlaylistSchema;
