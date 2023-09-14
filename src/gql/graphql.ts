/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BuyItemArgs = {
  itemId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID']['output'];
  partDescription?: Maybe<Scalars['String']['output']>;
  partName: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  saberPart: Scalars['String']['output'];
};

export type ItemArgs = {
  partDescription?: InputMaybe<Scalars['String']['input']>;
  partName: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Int']['input']>;
  saberPart: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  Signup?: Maybe<User>;
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']['output']>;
  createItem?: Maybe<Item>;
  login?: Maybe<UserWithToken>;
  updateItemUserIdById?: Maybe<Item>;
  updateUserDetails?: Maybe<UserDetails>;
};


export type MutationSignupArgs = {
  input: UserAuthInput;
};


export type MutationCreateItemArgs = {
  input: ItemArgs;
};


export type MutationLoginArgs = {
  input: UserAuthInput;
};


export type MutationUpdateItemUserIdByIdArgs = {
  newUserId: Scalars['String']['input'];
  partname: Scalars['String']['input'];
};


export type MutationUpdateUserDetailsArgs = {
  input: UserDetailsUpdateArgs;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']['output']>;
  first_user: User;
  getMarketItems: Array<Item>;
  getUserItems: Array<Item>;
  users: Array<User>;
};


export type QueryGetUserItemsArgs = {
  userId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  money: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type UserAuthInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserDetails = {
  __typename?: 'UserDetails';
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type UserDetailsUpdateArgs = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UserWithToken = {
  __typename?: 'UserWithToken';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ItemFragmentFragment = { __typename?: 'Item', id: string, partName: string, partDescription?: string | null, price?: number | null } & { ' $fragmentName'?: 'ItemFragmentFragment' };

export type TestLogingMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type TestLogingMutation = { __typename?: 'Mutation', login?: { __typename?: 'UserWithToken', token?: string | null, user?: { __typename?: 'User', id: string, username: string, money: number } | null } | null };

export type GetMarketItemssssQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMarketItemssssQuery = { __typename?: 'Query', getMarketItems: Array<(
    { __typename?: 'Item', id: string }
    & { ' $fragmentRefs'?: { 'ItemFragmentFragment': ItemFragmentFragment } }
  )> };

export type GetUserItemsQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetUserItemsQuery = { __typename?: 'Query', getUserItems: Array<(
    { __typename?: 'Item', id: string }
    & { ' $fragmentRefs'?: { 'ItemFragmentFragment': ItemFragmentFragment } }
  )> };

export type SingupOpreationMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SingupOpreationMutation = { __typename?: 'Mutation', Signup?: { __typename?: 'User', id: string, username: string } | null };

export type AddtoUserDetailesMutationVariables = Exact<{
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type AddtoUserDetailesMutation = { __typename?: 'Mutation', updateUserDetails?: { __typename?: 'UserDetails', id: string, lastName?: string | null } | null };

export const ItemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"partDescription"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<ItemFragmentFragment, unknown>;
export const TestLogingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestLoging"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<TestLogingMutation, TestLogingMutationVariables>;
export const GetMarketItemssssDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMarketItemssss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMarketItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"partDescription"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<GetMarketItemssssQuery, GetMarketItemssssQueryVariables>;
export const GetUserItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"partDescription"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<GetUserItemsQuery, GetUserItemsQueryVariables>;
export const SingupOpreationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SingupOpreation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<SingupOpreationMutation, SingupOpreationMutationVariables>;
export const AddtoUserDetailesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddtoUserDetailes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<AddtoUserDetailesMutation, AddtoUserDetailesMutationVariables>;