import React, { useEffect } from 'react';
import { Sidebar } from '../components/sidebar';
import { MarketplaceItem } from '../components/marketplaceitem';
import { graphql } from './../gql';
import { useQuery, useSubscription } from '@apollo/client';
import { Spinner } from '../components/spinner';
import { isLogin } from '../State';
import { makeVar, useReactiveVar } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

const GET_MARKET_ITEMS_QUERY = graphql(`
  query GetMarketItems {
    getMarketItems {
      id
      ...ItemFragment
    }
  }
`);

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

  const { loading, error, data, refetch } = useQuery(GET_MARKET_ITEMS_QUERY);
  useEffect(() => {
    refetch();
  }, [refetch]);
  const {
    loadingsub,
    errorsub,
    datasub: subdata,
  } = useSubscription(subMarketplace);
  console.log(subdata);
  return (
    <>
      <h4>New comment: {!loadingsub && subdata.marketplace.id}</h4>;
      <Sidebar></Sidebar>
      <div className="p-1 sm:ml-64">
        <div className="flex flex-wrap gap-4 justify-center items-left ">
          {loading && <Spinner></Spinner>}
          {error && <p>Error! {error.message}</p>}
          {!loading &&
            data?.getMarketItems?.map((item) => (
              <MarketplaceItem key={item.id} items={item} />
            ))}
        </div>
      </div>
    </>
  );
};
