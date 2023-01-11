import React from 'react';

 import * as StyleLoading from './styles';

export const Loading: React.FC = () => {
  return <StyleLoading.Container>
    <StyleLoading.LoadIndicator/>
  </StyleLoading.Container>
}