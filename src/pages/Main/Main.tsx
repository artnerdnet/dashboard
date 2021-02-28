import Basic from '@layouts/Basic';
import Content from '@layouts/Content';
import React from 'react';
import Tag from '@components/tag';
import Wrapper from '@layouts/Wrapper';

const Main: React.FC = () => {
  return (
    <Basic>
      <Wrapper>
        <Content>
          <Tag id='1' color='#fd0d90' text='arts and culture' />
        </Content>
      </Wrapper>
    </Basic>
  );
};

export default Main;
