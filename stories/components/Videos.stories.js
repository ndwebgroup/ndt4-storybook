import Videos from './Videos';

export default {
  title: 'Components/Videos',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Videos description'
      }
    }
  },
  argTypes: {
    videoId: { name:'Youtube ID', },
    style: { name: 'Video Style', control:'select', options:['embed','placeholder','lightbox']},
    playStyle: { name: 'Play Button Style', description:'only applies to placeholder and lightbox videos', control:'select', options:['default','outline','minimal','ornamental'] },
    playText: { name: 'Play Button Text', description:'only applies to placeholder and lightbox videos' }
  },
  args: {
    //Default args for stories
    style:'embed',
    videoId: 'p_vC10eq474',
    playStyle: 'default',
    playText: '',
  }
};

export const Embed = (args) => {
  return Videos(args);
};

Embed.args = {
  style:'embed'
};

export const Placeholder = (args) => {
  return Videos(args);
};

Placeholder.args = {
  style:'placeholder'
};
export const Lightbox = (args) => {
  return Videos(args);
};

Lightbox.args = {
  style:'lightbox'
};