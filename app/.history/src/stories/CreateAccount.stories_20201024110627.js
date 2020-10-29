import React from 'react';
import CreateAccount from '../comps/CreateAccount';

export default {
  title: 'Component/CreateAccount',
  component: CreateAccount
};

export const ChefCreateAccount = () => <CreateAccount text='CHEF'/>;
export const GourmetCreateAccount = () => <CreateAccount text='GOURMET' />;



