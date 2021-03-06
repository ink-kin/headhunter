import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { changePage } from '../redux/actions/utils';
import { Pagination } from 'antd';
import { Devider } from './Devider';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
`;

const PaginationApp = styled(Pagination)`
  display: flex;
  align-items: center;
`;

export const Footer = () => {
  const dispatch = useDispatch();
  const { snippetVacancies } = useSelector((state) => state.reducerJobs);
  const { countItemsOnPage, currentPage } = useSelector(
    (state) => state.reducerUtils
  );

  const onChange = (currentPage) => {
    dispatch(changePage({ currentPage }));
  };
  return (
    <Wrapper>
      <Devider>
        {snippetVacancies.length !== 0 ? (
          <PaginationApp
            defaultCurrent={1}
            current={currentPage}
            showSizeChanger={false}
            total={snippetVacancies.found}
            pageSize={countItemsOnPage}
            onChange={onChange}
            showLessItems={true}
          />
        ) : (
          <Title>HeadHunter</Title>
        )}
      </Devider>
    </Wrapper>
  );
};
