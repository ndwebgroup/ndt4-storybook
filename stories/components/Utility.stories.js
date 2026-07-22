import Utility from './Utility.js';

export default {
  title: 'Components/Utility',
  tags: ['!dev', '!autodocs', 'stable'],
  parameters: {
  },
  argTypes: {
    padding: { name: 'Padding', control: 'select', options: ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'pb-0', 'pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5', 'pi-0', 'pi-1', 'pi-2', 'pi-3', 'pi-4', 'pi-5' ] },
    margin: { name: 'Margin', control: 'select', options: ['m-0', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-5', 'mi-1', 'mi-2', 'mi-3', 'mi-4', 'mi-5'] },
    content: { name: 'Block Content', control:'text' },
    headingText: { name:'Heading Text', control:'text' },
    headingLevel: { name:'Heading Level', control:'select', options: ['h2', 'h3', 'h4', 'h5', 'h6'] },
    textAlign: { name:'Text Alignment', control:'select', options: ['text-start', 'text-center', 'text-end', 'text-pretty', 'text-balance'] },
    backgroundColor: { name: 'Background Color', control:'select', options: ['none', 'brand-blue', 'brand-blue-light', 'brand-blue-dark', 'sky-blue', 'sky-blue-light', 'warm-white'] },
    visibility: { name:'Visibility', control:'select', options: ['hidden', 'invisible', 'visually-hidden', 'visually-hidden-md', 'visually-hidden-ml', 'visually-hidden-lg', 'visually-hidden-xl', 'visually-hidden-xxl'] }
  },
  args: {
    headingText:'Content Title',
    headingLevel:'h2',
    content:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.',
    backgroundColor:'',
    padding:'',
    margin:'',
    textAlign:'',
    visibility:'',
  }
};

export const Default = (args) => {
  return Utility(args);
};