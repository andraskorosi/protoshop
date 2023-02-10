import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = ({categories}) => (
  <DirectoryContainer>
    {categories.map((category) => (
      <DirectoryItem category={category} key={category.id} />
    ))}
  </DirectoryContainer>
)

export default Directory