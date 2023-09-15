import React from 'react';
import emitter from './../images/aurora_emitter.png';
import { FragmentType, graphql, useFragment } from './../gql';
import { useMutation } from '@apollo/client';

const GetMarketItems = graphql(`
  fragment ItemFragment on Item {
    id
    partName
    partDescription
    saberPart
    price
    userId
  }
`);

const BuyItem = graphql(`
  mutation BuyAnItem($itemId: String!, $sellerId: String!) {
    purchaseItem(input: { itemId: $itemId, sellerId: $sellerId }) {
      username
      money
      inventory {
        partName
      }
    }
  }
`);

const badgeColors = {
  CRYSTAL_VIBRATOR: 'border-red-300 dark:text-red-300',
  HILT: 'border-green-300 dark:text-green-300',
  POWER_CORE: 'border-blue-300 dark:text-blue-300',
  CRYSTAL: 'border-yellow-300 dark:text-yellow-300',
};

export const MarketplaceItem = (props: {
  items: FragmentType<typeof GetMarketItems>;
}) => {
  const item = useFragment(GetMarketItems, props.items);
  const [purchaseItem] = useMutation(BuyItem, {
    variables: {
      itemId: item.id,
      sellerId: item.userId,
    },
    refetchQueries: 'active',
  });

  const badgeColor =
    badgeColors[item.saberPart] || 'border-gray-300 dark:text-gray-300';

  return (
    <div className="relative">
      <div className="w-72 h-[310px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col flex justify-center items-center">
        <span
          className={`absolute top-0 right-0 mt-2 mr-2 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:text-yellow-300 border  ${badgeColor}`}
        >
          {item.saberPart}
        </span>
        <div className="h-[150px]">
          <img
            className="mt-2 rounded-t-lg object-cover h-full w-fill "
            src={emitter}
            alt="product image"
          />
        </div>

        <div className="px-5 px-5 flex flex-col justify-between flex-grow">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.partName}
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white">
              {item.partDescription?.slice(0, 80)}
            </p>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between mt-2">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  purchaseItem();
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
