import React from 'react';
import { CollectionPreviewContainer, Title, Preview } from './index.styles';
import CollectionItem from './CollectionItem';

interface CollectionPreviewProps {
  title: string;
  products: CategoryItem[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  products,
}) => {
  return (
    <CollectionPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <CollectionItem key={product.id} product={product} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
