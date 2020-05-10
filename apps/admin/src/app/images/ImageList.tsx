import React from 'react';
import { 
  List,
  Filter,
  ReferenceInput,
  SearchInput,
  SelectInput
} from 'react-admin';
import GridList from './GridList';

export const ImageFilter = props => (
  <Filter {...props}>
      <SearchInput source="q" alwaysOn />
      <ReferenceInput
        label="Tags"
        source="tagId"
        reference="tags"
        sort={{ field: 'id', order: 'ASC' }}
      >
        <SelectInput source="name" />
      </ReferenceInput>
  </Filter>
);

const ImageList = props => (
  <List 
  {...props}
  filters={<ImageFilter />}
  >
    <GridList {...props} />
  </List>
);

export default ImageList;