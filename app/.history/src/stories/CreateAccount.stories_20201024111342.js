import React from 'react';
import CreateAccount from '../comps/CreateAccount';

export default {
  title: 'Component/CreateAccount',
  component: CreateAccount
};

export const ChefCreateAccount = () => <CreateAccount cheftext='CHEF' gourmettext='GOURMET' />;
export const GourmetCreateAccount = () => <CreateAccount cheftext='CHEF' gourmettext='GOURMET' />;



