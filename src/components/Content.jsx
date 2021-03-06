import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Sidebar } from './Sidebar';
import { ListVacansies } from './vacancies/ListVacansies';
import { ModalSearch } from './search/ModalSearch';
import { DataIsLoaded } from './Loader';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  align-items: flex-start;
`;

export const Content = () => {
  const { isLoadingData } = useSelector((state) => state.reducerJobs);
  return (
    <Wrapper>
      <Sidebar />
      <DataIsLoaded isLoading={isLoadingData}>
        <ListVacansies />
      </DataIsLoaded>
      <ModalSearch />
    </Wrapper>
  );
};
