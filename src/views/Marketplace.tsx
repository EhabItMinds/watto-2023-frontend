import React, { useEffect } from 'react';
import { Sidebar } from '../components/sidebar';
import { MarketplaceItem } from '../components/marketplaceitem';
import { graphql } from './../gql';
import { useSubscription } from '@apollo/client';
import { Spinner } from '../components/spinner';
import { isLogin } from '../State';
import { useReactiveVar } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const subMarketplace = graphql(`
  subscription Marketplace {
    marketplace {
      id
      partDescription
      saberPart
      price
      partName
      userId
    }
  }
`);

export const Marketplace = () => {
  const navigate = useNavigate();
  if (!useReactiveVar(isLogin)) {
    navigate('/login');
  }
  const userDataString = localStorage.getItem('userData');
  if (!userDataString) {
    console.log('cannot get the data');
  }

  // const { loading, error, data, refetch } = useQuery(GET_MARKET_ITEMS_QUERY);
  // useEffect(() => {
  //   refetch();
  // }, [refetch]);
  const { data, error, loading } = useSubscription(subMarketplace);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-1 sm:ml-64">
        <div className="flex flex-wrap gap-4 justify-center items-left ">
          {loading && <Spinner></Spinner>}
          {error && <p>Error! {error.message}</p>}
          {!loading &&
            data?.marketplace?.map((item) => (
              <MarketplaceItem key={item.id} marketItem={item} />
            ))}
        </div>
      </div>
    </>
  );
};
